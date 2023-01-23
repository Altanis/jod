import Parser from "./Parser";
import { Tokens } from "../Const/Tokens";
import Logger from "../Utils/Logger";

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
        while (this.charIdx < chars.length) {
            let char = "";
            for (let i = 0; i < this.lookBack + 1; i++) char += chars[i];
            this.charIdx++;

            const charType = Tokens.get(char);
            console.log(char, charType, this.charIdx);

            /** @ts-ignore */
            if ([" "].includes(char.at(-1))) Logger.err(`Could not find item ${char.slice(0, 1)}.`);

            switch (charType) {
                case "Newline": this.line++; continue;
                case "VariableDeclaration": {
                    if (chars[this.charIdx] !== " ") continue;
                    else this.charIdx++; // Skip space

                    const name = this.nextToken();
                    Logger.err("woo found name", name);

                    this.lookBack = 0;
                }
                default: this.lookBack++; continue;
            }
        }
    }

    /** Gets the next "word" before a space. */
    private nextToken(): string {
        let token = "";
        while (this.chars[this.charIdx] !== " ") {
            token += this.chars[this.charIdx++];
        }
        
        return token;
    }
}

export default Lexer;