import Lexer from "./Lexer";

/** Initial parser of the code, handles communication with specialized parsers. */
class Parser {
    /** The code that the parser is parsing. */
    public code = "";
    /** The tokenizer which lexically analyzes tokens. */
    private lexer = new Lexer(this);

    /** The stack which holds every variable. */
    private stack = new Map<string, any>();

    /** Initial parser of the code. */
    public set(code: string) {
        this.code = code;
        console.log(code);
        this.lexer.parse(code);
    }
}

export default Parser;