"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Logger_1 = __importDefault(require("./Utils/Logger"));
const Parser = class {
    constructor(path) {
        this.files = new Map();
        this.code = "";
        this.setup(path);
    }
    setup(path) {
        if (!path)
            Logger_1.default.err("Interpreter does not support modular systems.");
        if (!path.endsWith(".jod"))
            Logger_1.default.err("Input file is not of JOD extension.");
        fs_1.default.readFile(path, (err, data) => {
            if (err)
                Logger_1.default.err(err, true);
            this.code = data.toString();
            console.log(this.code);
        });
    }
};
exports.default = Parser;
//# sourceMappingURL=Parser.js.map