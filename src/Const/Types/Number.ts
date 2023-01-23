/** A representation of a Number, a 64bit representation of both floats and ints. */
export default class Number {
    /** The value of the number. */
    public value: number;

    constructor(value: number) {
        this.value = value;
    }

    /** Representation of the class internally. */
    public get stringify() {
        return {
            type: (this.value | 0) === this.value ? "Integer" : "Float",
            value: this.value
        };
    }
}