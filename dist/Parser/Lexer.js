"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("../Const/Tokens");
const Logger_1 = __importDefault(require("../Utils/Logger"));
/** Lexically analyzes code and returns it as a series of tokens. */
class Lexer {
    constructor(parser) {
        /** The index of the token being read. */
        this.tokenIdx = 0;
        /** The line at which the lexer is reading. */
        this.line = 0;
        /** The character at which the lexer is reading. */
        this.charIdx = 0;
        /** The amount of characters to lookback. Used to differentiate between onechars and tokens. */
        this.lookBack = 0;
        /** The characters of the code */
        this.chars = [];
        /** The tokens parsed. */
        this.tokens = [];
        this.parser = parser;
    }
    parse(code) {
        const chars = this.chars = code.split("");
        console.log(chars, this.charIdx);
        while (this.charIdx < chars.length) {
            let char = "";
            for (let i = 0; i < this.lookBack + 1; i++)
                char += chars[i];
            this.charIdx++;
            const charType = Tokens_1.Tokens.get(char);
            console.log(char, charType, this.charIdx);
            /** @ts-ignore */
            if ([" "].includes(char.at(-1)))
                Logger_1.default.err(`Could not find item ${char.slice(0, 1)}.`);
            switch (charType) {
                case "Newline":
                    this.line++;
                    continue;
                case "VariableDeclaration": {
                    if (chars[this.charIdx] !== " ")
                        continue;
                    else
                        this.charIdx++; // Skip space
                    const name = this.nextToken();
                    Logger_1.default.err("woo found name", name);
                    this.lookBack = 0;
                }
                default:
                    this.lookBack++;
                    continue;
            }
        }
    }
    /** Gets the next "word" before a space. */
    nextToken() {
        let token = "";
        while (this.chars[this.charIdx] !== " ") {
            token += this.chars[this.charIdx++];
        }
        return token;
    }
}
exports.default = Lexer;
//# sourceMappingURL=Lexer.js.map