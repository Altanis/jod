import Parser from "./Parser";
import { Tokens } from "../Const/Tokens";
import Logger from "../Utils/Logger";

import Number from "../Const/Types/Number";

/** Lexically analyzes code and returns it as a series of tokens. */
class Lexer {
    /** The main parser which contains other handlers. */
    private parser: Parser;
    
    /** The index of the token being read. */
    private tokenIdx = 0;
    /** The line at which the lexer is reading. */
    private line = 0;
    /** The character at which the lexer is reading. */
    private charIdx = 0;
    /** The amount of characters to lookback. Used to differentiate between onechars and tokens. */
    private lookBack = 0;

    /** The characters of the code */
    private chars: string[] = [];
    /** The tokens parsed. */
    private tokens: string[] = [];

    constructor(parser: Parser) {
        this.parser = parser;
    }

    public parse(code: string) {
        const chars = this.chars = code.split("");
        console.log(chars, this.charIdx);
        while (this.charIdx < chars.length - 1) {
            let char = "";
            for (let i = 0; i < this.lookBack + 1; i++) char += chars[i];
            this.charIdx++;

            const charType = Tokens.get(char) || this.parser.stack.get(char)?.stringify.type;
            console.log(char, charType, this.charIdx);
            /** @ts-ignore */
            if ([" "].includes(char.at(-1))) Logger.err(`Could not find item ${char.slice(0, 1)}. (${this.line})`);

            switch (charType) {
                case "Newline": this.line++; continue;
                case "VariableDeclaration": {
                    if (chars[this.charIdx] !== " ") continue;
                    else this.charIdx++; // Skip space

                    console.log(chars[this.charIdx]);
                    const name = this.nextToken("=").trim();
                    
                    if (/\d/.test(name)) Logger.err(`Variable name cannot include a number. (${this.line})`);
                    if (Tokens.get(name)) Logger.err(`Variable name cannot be a keyword. (${this.line})`);

                    const value = this.parseToken(this.nextToken(";").slice(1).trim());

                    this.parser.stack.set(name, value);
                    console.log(this.charIdx, chars[this.charIdx]);

                    this.lookBack = 0;
                }
                case "Function": {
                    this.nextToken("(");
                    /** @ts-ignore */
                    const types = charType.stringify.operands;

                    for (let i = 0; i < types.length; i++) {
                        const type = types[i];
                        const value = this.parseToken(this.nextToken(","));                        
                    }
                }
                default: this.lookBack++; continue;
            }
        }
    }

    /** Gets the next "word" before a space. */
    private nextToken(splitter: string): string {
        let token = "";
        while (this.chars[this.charIdx] !== splitter) {
            token += this.chars[this.charIdx++];
        }
        
        return token;
    }

    /** Parses a value. */
    private parseToken(token: string) {
        if (!isNaN(+token)) return new Number(+token);
    }
}

export default Lexer;