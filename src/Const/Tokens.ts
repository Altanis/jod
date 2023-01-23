import Function from "./Types/Function";

const Tokens = new Map<string, string | Function>([
    ["let", "VariableDeclaration"],

    ["print!", new Function(["string"])],

    ["+", "Operand"],
    ["-", "Operand"],
    ["*", "Operand"],
    ["/", "Operand"],

    ["\n", "Newline"],
    ["\r", "Newline"],
    ["\r\n", "Newline"]
]);

export { Tokens };