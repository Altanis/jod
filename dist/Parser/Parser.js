"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lexer_1 = __importDefault(require("./Lexer"));
/** Initial parser of the code, handles communication with specialized parsers. */
class Parser {
    constructor() {
        /** The code that the parser is parsing. */
        this.code = "";
        /** The tokenizer which lexically analyzes tokens. */
        this.lexer = new Lexer_1.default(this);
        /** The stack which holds every variable. */
        this.stack = new Map();
    }
    /** Initial parser of the code. */
    set(code) {
        this.code = code;
        console.log(code);
        this.lexer.parse(code);
    }
}
exports.default = Parser;
//# sourceMappingURL=Parser.js.map