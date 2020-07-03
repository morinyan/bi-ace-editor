// Generated from Expr.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('../antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#stat.
ExprListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by ExprParser#stat.
ExprListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by ExprParser#unaryOpExpr.
ExprListener.prototype.enterUnaryOpExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#unaryOpExpr.
ExprListener.prototype.exitUnaryOpExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#doubleExpr.
ExprListener.prototype.enterDoubleExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#doubleExpr.
ExprListener.prototype.exitDoubleExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#addSubExpr.
ExprListener.prototype.enterAddSubExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#addSubExpr.
ExprListener.prototype.exitAddSubExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#string.
ExprListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by ExprParser#string.
ExprListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by ExprParser#longExpr.
ExprListener.prototype.enterLongExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#longExpr.
ExprListener.prototype.exitLongExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#nestedExpr.
ExprListener.prototype.enterNestedExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#nestedExpr.
ExprListener.prototype.exitNestedExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#mulDivModuloExpr.
ExprListener.prototype.enterMulDivModuloExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#mulDivModuloExpr.
ExprListener.prototype.exitMulDivModuloExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#powOpExpr.
ExprListener.prototype.enterPowOpExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#powOpExpr.
ExprListener.prototype.exitPowOpExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#functionExpr.
ExprListener.prototype.enterFunctionExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#functionExpr.
ExprListener.prototype.exitFunctionExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#identifierExpr.
ExprListener.prototype.enterIdentifierExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#identifierExpr.
ExprListener.prototype.exitIdentifierExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#functionArgs.
ExprListener.prototype.enterFunctionArgs = function(ctx) {
};

// Exit a parse tree produced by ExprParser#functionArgs.
ExprListener.prototype.exitFunctionArgs = function(ctx) {
};



exports.ExprListener = ExprListener;