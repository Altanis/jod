"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
const Tokens = new Map([
    ["let", "VariableDeclaration"],
    ["+", "Operand"],
    ["-", "Operand"],
    ["*", "Operand"],
    ["/", "Operand"],
    ["\n", "Newline"],
    ["\r", "Newline"],
    ["\r\n", "Newline"]
]);
exports.Tokens = Tokens;
//# sourceMappingURL=Tokens.js.map