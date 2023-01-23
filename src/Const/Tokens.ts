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

export { Tokens };