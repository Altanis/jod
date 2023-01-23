/** Initial parser of the code, handles communication with specialized parsers. */
declare class Parser {
    /** The code that the parser is parsing. */
    code: string;
    /** The tokenizer which lexically analyzes tokens. */
    private lexer;
    /** The stack which holds every variable. */
    private stack;
    /** Initial parser of the code. */
    set(code: string): void;
}
export default Parser;
//# sourceMappingURL=Parser.d.ts.map