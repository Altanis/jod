import Lexer from "./Lexer";

import Number from "../Const/Types/Number";

/** Initial parser of the code, handles communication with specialized parsers. */
class Parser {
    /** The code that the parser is parsing. */
    public code = "";
    /** The tokenizer which lexically analyzes tokens. */
    private lexer = new Lexer(this);

    /** The stack which holds every variable. */
    public stack = new Map<string, Number | undefined>();

    /** Initial parser of the code. */
    public set(code: string) {
        this.code = code;
        console.log(code);
        this.lexer.parse(code);
    }
}

export default Parser;