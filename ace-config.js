var keywords = require('./keywords');
var functions = require('./sql-docs');

ace.config.setModuleUrl(
  'ace/mode/BI-mode', './BI-mode.js'
);
ace.config.setModuleUrl(
  'ace/worker/BI-worker',
  './BI-worker.js'
);

const langTools = ace.require("ace/ext/language_tools");

const keywordList = ([]).concat(keywords.SQL_DYNAMICS.map(v => ({ name: v, value: v, score: 0, meta: 'dynamic' })));

const keywordCompleter = {
    getCompletions: (_editor, _session, _pos, _prefix, callback) => {
        return callback(null, keywordList);
    },
};

langTools.setCompleters([
    langTools.snippetCompleter,
    langTools.textCompleter,
    keywordCompleter
]);

const functionList = functions.SQL_FUNCTIONS.map(entry => {
    return {
        value: entry.name,
        score: 80,
        meta: 'function',
        syntax: entry.name + entry.arguments,
        description: entry.description,
        completer: {
            insertMatch: (editor, data) => {
                editor.completer.insertMatch({ value: data.value });
            },
        },
    };
});

langTools.addCompleter({
    getCompletions: (_editor, _session, _pos, _prefix, callback) => {
        callback(null, functionList);
    },
    getDocTooltip: (item) => {
        if (item.meta === 'function') {
            item.docHTML = completerToHtml(item);
        }
    },
});

function escape(string){
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
    };

    function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
    }

    var reUnescapedHtml = /[&<>"'`]/g;

    return string.replace(reUnescapedHtml, escapeHtmlChar)
}

function completerToHtml(item) {
    return `<div class="function-doc">
        <div class="function-doc-name">
            <b>${escape(item.value)}</b>
        </div>
        <hr />
        <div>
            <b>Syntax:</b>
        </div>
        <div>${escape(item.syntax)}</div>
        <br />
        <div>
            <b>Description:</b>
        </div>
        <div>${escape(item.description)}</div>
    </div>`;
}
