/** A representation of a function, which executes a set of instructions. */
export default class Function {
    /** The operands of the function. */
    public operands: string[];

    constructor(operands: string[]) {
        this.operands = operands;
    }

    public get stringify() {
        return {
            type: "Function",
            operands: this.operands
        };
    }
}