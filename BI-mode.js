var ace = require("ace-builds");

var Worker = require('worker-loader!./BI-worker.js');

var functions = require('./sql-docs');

var builtinFunctions = [].concat(
    functions.SQL_FUNCTIONS.map(function(f) {
        return f.name;
    }),
).join('|');


// define ace editor mode
ace.define('ace/mode/BI-mode',[], function(require, exports, module) {

    var oop = require("ace/lib/oop");

    var TextMode = require("ace/mode/text").Mode;

    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var BIHighlightRules = function() {

        var keywordMapper = this.createKeywordMapper({'support.function': builtinFunctions, keyword: 'class',}, "identifier");

        this.$rules = {
            start: [
                {
                    token: 'string', // ' string
                    regex: "'.*?'",
                },
                {
                    token: 'constant.numeric', // float
                    regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b',
                },
                {
                    token: keywordMapper,
                    regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\b',
                },
                {
                    token: 'keyword.operator',
                    regex: '\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=',
                },
                {
                    token: 'paren.lparen',
                    regex: '[\\(]',
                },
                {
                    token: 'paren.rparen',
                    regex: '[\\)]',
                },
                {
                    token: 'text',
                    regex: '\\s+',
                },
            ],
        };

        this.normalizeRules();
    };

    oop.inherits(BIHighlightRules, TextHighlightRules);

    var BIMode = function() {
        this.HighlightRules = BIHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };

    oop.inherits(BIMode, TextMode);

    (function() {

        this.$id = "ace/mode/BI-mode";
        
        var WorkerClient = require("ace/worker/worker_client").WorkerClient;

        this.createWorker = function(session) {

            this.$worker = new WorkerClient(new Worker());

            this.$worker.attachToDocument(session.getDocument());

            this.$worker.on("errors", function(e) {
                session.setAnnotations(e.data);
            });

            this.$worker.on("annotate", function(e) {
                session.setAnnotations(e.data);
            });

            this.$worker.on("terminate", function() {
                session.clearAnnotations();
            });

            return this.$worker;
        };
        
    }).call(BIMode.prototype);

    exports.Mode = BIMode;
});