import Parser from "./Parser";
/** Lexically analyzes code and returns it as a series of tokens. */
declare class Lexer {
    /** The main parser which contains other handlers. */
    private parser;
    /** The index of the token being read. */
    private tokenIdx;
    /** The line at which the lexer is reading. */
    private line;
    /** The character at which the lexer is reading. */
    private charIdx;
    /** The amount of characters to lookback. Used to differentiate between onechars and tokens. */
    private lookBack;
    /** The characters of the code */
    private chars;
    /** The tokens parsed. */
    private tokens;
    constructor(parser: Parser);
    parse(code: string): void;
    /** Gets the next "word" before a space. */
    private nextToken;
}
export default Lexer;
//# sourceMappingURL=Lexer.d.ts.map