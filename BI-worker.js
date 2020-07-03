var antlr4 = require('./antlr4/index.js');

var ExprLexer = require('./parser/ExprLexer').ExprLexer;

var ExprParser = require('./parser/ExprParser').ExprParser;

importScripts(require("file-loader!ace-builds/src-noconflict/worker-json.js"));

function LspAdapter(ctx, createData) {
    this._ctx = ctx;
    this._languageSettings = createData.languageSettings;
    this._languageId = createData.languageId;
    this._languageService = ctx.service.getLanguageService({});
    this._languageService.configure(this._languageSettings);
}

(function () {
    this.doValidation = function (uri) {

        var document = this._getTextDocument(uri);

        if (!document) {
            return Promise.resolve([]);
        }
        
        var jsonDocument = this._languageService.parseJSONDocument(document);

        return this._languageService.doValidation(document, jsonDocument).then(function(annotations) {
            return annotations.map(toAceAnnotation);
        });

    };

    this.doComplete = function (uri, position) {
        var document = this._getTextDocument(uri);

        var jsonDocument = this._languageService.parseJSONDocument(document);

        return this._languageService.doComplete(document, position, jsonDocument).then(function(result) {
            return result.items.map(toAceCompletion);
        });

    };

    this.doResolve = function (item) {
        return this._languageService.doResolve(item);
    };

    this.doHover = function (uri, position) {
        var document = this._getTextDocument(uri);
        var jsonDocument = this._languageService.parseJSONDocument(document);
        return this._languageService.doHover(document, position, jsonDocument);
    };

    this.format = function (uri, range, options) {
        var document = this._getTextDocument(uri);
        var textEdits = this._languageService.format(document, range, options);
        return Promise.resolve(textEdits);
    };

    this.resetSchema = function (uri) {
        return Promise.as(this._languageService.resetSchema(uri));
    };

    this.findDocumentSymbols = function (uri) {
        var document = this._getTextDocument(uri);
        var jsonDocument = this._languageService.parseJSONDocument(document);
        var symbols = this._languageService.findDocumentSymbols(document, jsonDocument);
        return Promise.as(symbols);
    };

    this.findDocumentColors = function (uri) {
        var document = this._getTextDocument(uri);
        var stylesheet = this._languageService.parseJSONDocument(document);
        var colorSymbols = this._languageService.findDocumentColors(document, stylesheet);
        return Promise.as(colorSymbols);
    };

    this.getColorPresentations = function (uri, color, range) {
        var document = this._getTextDocument(uri);
        var stylesheet = this._languageService.parseJSONDocument(document);
        var colorPresentations = this._languageService.getColorPresentations(document, stylesheet, color, range);
        return Promise.as(colorPresentations);
    };

    this.provideFoldingRanges = function (uri, context) {
        var document = this._getTextDocument(uri);
        var ranges = this._languageService.getFoldingRanges(document, context);
        return Promise.as(ranges);
    };

    this._getTextDocument = function (uri) {

        if (this.doc) {
            return this.doc;
        }

        var doc = this._ctx.doc;

        this.doc = {}

        this.doc.offsetAt = function(pos) {
            return doc.positionToIndex(toAcePosition(pos))
        }

        this.doc.positionAt = function(offset) {
            return toLspPosition(doc.indexToPosition(offset))
        }

        this.doc.getText = function() {
            return doc.getValue()
        }

        return this.doc; 

    };

}).call(LspAdapter.prototype);


function toLspPosition(pos) {
    return {line: pos.row, character: pos.column}
}

function toAcePosition(pos) {
    return {row: pos.line, column: pos.character}
}

function toAceCompletion(item) {
    var transformed = {
        score: 1000,
        caption: item.label,
        doc: item.documentation || item.detail,
        command: item.command
    }
    if (item.insertTextFormat == 2)
        transformed.snippet = item.insertText
    else
        transformed.value = item.insertText
    return transformed;
}

function toAceAnnotation(m) {
    var start = toAcePosition(m.range.start);
    var end = toAcePosition(m.range.end);
    return {
        text: m.message,
        code: m.code,
        type: ["", "error", "warning", "info"][m.severity],
        row: start.row, 
        column: start.column,
    };
}

// define ace worker
ace.define('ace/worker/BI-worker',[], function(require, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var MyWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(MyWorker, Mirror);

    var AnnotatingErrorListener = function(annotations) {
        antlr4.error.ErrorListener.call(this);
        this.annotations = annotations;
        return this;
    };

    AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);

    AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

    AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
        this.annotations.push({
            row: line - 1,
            column: column,
            text: msg,
            type: "error"
        });
    };

    function validate(input) {
        var stream = new antlr4.CharStreams.fromString(input);
        var lexer = new ExprLexer(stream);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new ExprParser(tokens);
        var annotations = [];
        var listener = new AnnotatingErrorListener(annotations)
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        parser.stat();
        return annotations;
    }

    (function() {
        this.onUpdate = function() {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };
    }).call(MyWorker.prototype);

    exports.MyWorker = MyWorker;
});

window.onmessage({
    data: {
        init : true,
        module: 'ace/worker/BI-worker',
        classname : "MyWorker"
    }
});

