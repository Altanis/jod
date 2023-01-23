"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Index_instances, _Index_setup;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Parser_1 = __importDefault(require("./Parser/Parser"));
const Logger_1 = __importDefault(require("./Utils/Logger"));
class Index {
    constructor(path) {
        _Index_instances.add(this);
        /** The parser which interprets the code. */
        this.parser = new Parser_1.default();
        console.log(path);
        __classPrivateFieldGet(this, _Index_instances, "m", _Index_setup).call(this, path);
    }
}
_Index_instances = new WeakSet(), _Index_setup = function _Index_setup(path) {
    if (!path)
        Logger_1.default.err("Interpreter does not support modular systems.");
    if (!path.endsWith(".jod"))
        Logger_1.default.err("Input file is not of JOD extension.");
    fs_1.default.readFile(path, (err, data) => {
        if (err)
            Logger_1.default.err(err, true);
        console.log(data);
        this.parser.set(data.toString());
    });
};
exports.default = Index;
//# sourceMappingURL=Index.js.map