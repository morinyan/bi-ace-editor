// Generated from Expr.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('../antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u00195\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003(\n\u0003\f\u0003\u000e\u0003",
    "+\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00040\n\u0004",
    "\f\u0004\u000e\u00043\u000b\u0004\u0003\u0004\u0002\u0003\u0004\u0005",
    "\u0002\u0004\u0006\u0002\u0005\u0003\u0002\u000b\f\u0003\u0002\u000e",
    "\u0010\u0004\u0002\u000b\u000b\u0011\u0011\u0002<\u0002\b\u0003\u0002",
    "\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006,\u0003\u0002",
    "\u0002\u0002\b\t\u0005\u0004\u0003\u0002\t\n\u0007\u0002\u0002\u0003",
    "\n\u0003\u0003\u0002\u0002\u0002\u000b\f\b\u0003\u0001\u0002\f\r\t\u0002",
    "\u0002\u0002\r\u001d\u0005\u0004\u0003\f\u000e\u000f\u0007\u0003\u0002",
    "\u0002\u000f\u0010\u0005\u0004\u0003\u0002\u0010\u0011\u0007\u0004\u0002",
    "\u0002\u0011\u001d\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0006\u0002",
    "\u0002\u0013\u0015\u0007\u0003\u0002\u0002\u0014\u0016\u0005\u0006\u0004",
    "\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u001d\u0007\u0004\u0002",
    "\u0002\u0018\u001d\u0007\u0006\u0002\u0002\u0019\u001d\u0007\b\u0002",
    "\u0002\u001a\u001d\u0007\u0007\u0002\u0002\u001b\u001d\u0007\n\u0002",
    "\u0002\u001c\u000b\u0003\u0002\u0002\u0002\u001c\u000e\u0003\u0002\u0002",
    "\u0002\u001c\u0012\u0003\u0002\u0002\u0002\u001c\u0018\u0003\u0002\u0002",
    "\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002",
    "\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d)\u0003\u0002\u0002",
    "\u0002\u001e\u001f\f\u000b\u0002\u0002\u001f \u0007\r\u0002\u0002 (",
    "\u0005\u0004\u0003\u000b!\"\f\n\u0002\u0002\"#\t\u0003\u0002\u0002#",
    "(\u0005\u0004\u0003\u000b$%\f\t\u0002\u0002%&\t\u0004\u0002\u0002&(",
    "\u0005\u0004\u0003\n\'\u001e\u0003\u0002\u0002\u0002\'!\u0003\u0002",
    "\u0002\u0002\'$\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0005\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,1\u0005\u0004\u0003\u0002-.\u0007",
    "\u0005\u0002\u0002.0\u0005\u0004\u0003\u0002/-\u0003\u0002\u0002\u0002",
    "03\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u00022\u0007\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002\u0007",
    "\u0015\u001c\')1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','", null, null, null, null, 
                     null, "'-'", "'!'", "'^'", "'*'", "'/'", "'%'", "'+'", 
                     "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'&&'", 
                     "'||'" ];

var symbolicNames = [ null, null, null, null, "IDENTIFIER", "LONG", "DOUBLE", 
                      "WS", "STRING", "MINUS", "NOT", "POW", "MUL", "DIV", 
                      "MODULO", "PLUS", "LT", "LEQ", "GT", "GEQ", "EQ", 
                      "NEQ", "AND", "OR" ];

var ruleNames =  [ "stat", "expr", "fnArgs" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.IDENTIFIER = 4;
ExprParser.LONG = 5;
ExprParser.DOUBLE = 6;
ExprParser.WS = 7;
ExprParser.STRING = 8;
ExprParser.MINUS = 9;
ExprParser.NOT = 10;
ExprParser.POW = 11;
ExprParser.MUL = 12;
ExprParser.DIV = 13;
ExprParser.MODULO = 14;
ExprParser.PLUS = 15;
ExprParser.LT = 16;
ExprParser.LEQ = 17;
ExprParser.GT = 18;
ExprParser.GEQ = 19;
ExprParser.EQ = 20;
ExprParser.NEQ = 21;
ExprParser.AND = 22;
ExprParser.OR = 23;

ExprParser.RULE_stat = 0;
ExprParser.RULE_expr = 1;
ExprParser.RULE_fnArgs = 2;


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatContext.prototype.EOF = function() {
    return this.getToken(ExprParser.EOF, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitStat(this);
	}
};




ExprParser.StatContext = StatContext;

ExprParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.expr(0);
        this.state = 7;
        this.match(ExprParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function UnaryOpExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryOpExprContext.prototype = Object.create(ExprContext.prototype);
UnaryOpExprContext.prototype.constructor = UnaryOpExprContext;

ExprParser.UnaryOpExprContext = UnaryOpExprContext;

UnaryOpExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

UnaryOpExprContext.prototype.MINUS = function() {
    return this.getToken(ExprParser.MINUS, 0);
};

UnaryOpExprContext.prototype.NOT = function() {
    return this.getToken(ExprParser.NOT, 0);
};
UnaryOpExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterUnaryOpExpr(this);
	}
};

UnaryOpExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitUnaryOpExpr(this);
	}
};


function DoubleExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleExprContext.prototype = Object.create(ExprContext.prototype);
DoubleExprContext.prototype.constructor = DoubleExprContext;

ExprParser.DoubleExprContext = DoubleExprContext;

DoubleExprContext.prototype.DOUBLE = function() {
    return this.getToken(ExprParser.DOUBLE, 0);
};
DoubleExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterDoubleExpr(this);
	}
};

DoubleExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitDoubleExpr(this);
	}
};


function AddSubExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubExprContext.prototype = Object.create(ExprContext.prototype);
AddSubExprContext.prototype.constructor = AddSubExprContext;

ExprParser.AddSubExprContext = AddSubExprContext;

AddSubExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AddSubExprContext.prototype.PLUS = function() {
    return this.getToken(ExprParser.PLUS, 0);
};

AddSubExprContext.prototype.MINUS = function() {
    return this.getToken(ExprParser.MINUS, 0);
};
AddSubExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAddSubExpr(this);
	}
};

AddSubExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAddSubExpr(this);
	}
};


function StringContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(ExprContext.prototype);
StringContext.prototype.constructor = StringContext;

ExprParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(ExprParser.STRING, 0);
};
StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitString(this);
	}
};


function LongExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LongExprContext.prototype = Object.create(ExprContext.prototype);
LongExprContext.prototype.constructor = LongExprContext;

ExprParser.LongExprContext = LongExprContext;

LongExprContext.prototype.LONG = function() {
    return this.getToken(ExprParser.LONG, 0);
};
LongExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterLongExpr(this);
	}
};

LongExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitLongExpr(this);
	}
};


function NestedExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExprContext.prototype = Object.create(ExprContext.prototype);
NestedExprContext.prototype.constructor = NestedExprContext;

ExprParser.NestedExprContext = NestedExprContext;

NestedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NestedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterNestedExpr(this);
	}
};

NestedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitNestedExpr(this);
	}
};


function MulDivModuloExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivModuloExprContext.prototype = Object.create(ExprContext.prototype);
MulDivModuloExprContext.prototype.constructor = MulDivModuloExprContext;

ExprParser.MulDivModuloExprContext = MulDivModuloExprContext;

MulDivModuloExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MulDivModuloExprContext.prototype.MUL = function() {
    return this.getToken(ExprParser.MUL, 0);
};

MulDivModuloExprContext.prototype.DIV = function() {
    return this.getToken(ExprParser.DIV, 0);
};

MulDivModuloExprContext.prototype.MODULO = function() {
    return this.getToken(ExprParser.MODULO, 0);
};
MulDivModuloExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterMulDivModuloExpr(this);
	}
};

MulDivModuloExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMulDivModuloExpr(this);
	}
};


function PowOpExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowOpExprContext.prototype = Object.create(ExprContext.prototype);
PowOpExprContext.prototype.constructor = PowOpExprContext;

ExprParser.PowOpExprContext = PowOpExprContext;

PowOpExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PowOpExprContext.prototype.POW = function() {
    return this.getToken(ExprParser.POW, 0);
};
PowOpExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterPowOpExpr(this);
	}
};

PowOpExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitPowOpExpr(this);
	}
};


function FunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExprContext.prototype = Object.create(ExprContext.prototype);
FunctionExprContext.prototype.constructor = FunctionExprContext;

ExprParser.FunctionExprContext = FunctionExprContext;

FunctionExprContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};

FunctionExprContext.prototype.fnArgs = function() {
    return this.getTypedRuleContext(FnArgsContext,0);
};
FunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterFunctionExpr(this);
	}
};

FunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitFunctionExpr(this);
	}
};


function IdentifierExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExprContext.prototype = Object.create(ExprContext.prototype);
IdentifierExprContext.prototype.constructor = IdentifierExprContext;

ExprParser.IdentifierExprContext = IdentifierExprContext;

IdentifierExprContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
IdentifierExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterIdentifierExpr(this);
	}
};

IdentifierExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitIdentifierExpr(this);
	}
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryOpExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 10;
            _la = this._input.LA(1);
            if(!(_la===ExprParser.MINUS || _la===ExprParser.NOT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 11;
            this.expr(10);
            break;

        case 2:
            localctx = new NestedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 12;
            this.match(ExprParser.T__0);
            this.state = 13;
            this.expr(0);
            this.state = 14;
            this.match(ExprParser.T__1);
            break;

        case 3:
            localctx = new FunctionExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 16;
            this.match(ExprParser.IDENTIFIER);
            this.state = 17;
            this.match(ExprParser.T__0);
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__0) | (1 << ExprParser.IDENTIFIER) | (1 << ExprParser.LONG) | (1 << ExprParser.DOUBLE) | (1 << ExprParser.STRING) | (1 << ExprParser.MINUS) | (1 << ExprParser.NOT))) !== 0)) {
                this.state = 18;
                this.fnArgs();
            }

            this.state = 21;
            this.match(ExprParser.T__1);
            break;

        case 4:
            localctx = new IdentifierExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            this.match(ExprParser.IDENTIFIER);
            break;

        case 5:
            localctx = new DoubleExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 23;
            this.match(ExprParser.DOUBLE);
            break;

        case 6:
            localctx = new LongExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(ExprParser.LONG);
            break;

        case 7:
            localctx = new StringContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            this.match(ExprParser.STRING);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 39;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 37;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowOpExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 28;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 29;
                    this.match(ExprParser.POW);
                    this.state = 30;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new MulDivModuloExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 32;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.MUL) | (1 << ExprParser.DIV) | (1 << ExprParser.MODULO))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 33;
                    this.expr(9);
                    break;

                case 3:
                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 34;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 35;
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.MINUS || _la===ExprParser.PLUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 36;
                    this.expr(8);
                    break;

                } 
            }
            this.state = 41;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function FnArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_fnArgs;
    return this;
}

FnArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnArgsContext.prototype.constructor = FnArgsContext;


 
FnArgsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FunctionArgsContext(parser, ctx) {
	FnArgsContext.call(this, parser);
    FnArgsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionArgsContext.prototype = Object.create(FnArgsContext.prototype);
FunctionArgsContext.prototype.constructor = FunctionArgsContext;

ExprParser.FunctionArgsContext = FunctionArgsContext;

FunctionArgsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
FunctionArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterFunctionArgs(this);
	}
};

FunctionArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitFunctionArgs(this);
	}
};



ExprParser.FnArgsContext = FnArgsContext;

ExprParser.prototype.fnArgs = function() {

    var localctx = new FnArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprParser.RULE_fnArgs);
    var _la = 0; // Token type
    try {
        localctx = new FunctionArgsContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.expr(0);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__2) {
            this.state = 43;
            this.match(ExprParser.T__2);
            this.state = 44;
            this.expr(0);
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
