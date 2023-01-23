"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const Logger = {
    log(...args) {
        console.log(chalk_1.default.blue(`ℹ [${Date().split(" ")[4]}]:`, ...args));
    },
    warn(...args) {
        args = args.map(l => typeof l === "string" ? chalk_1.default.yellow(l) : l);
        console.log(chalk_1.default.yellow(`⚠ [${Date().split(" ")[4]}]:`, ...args));
    },
    err(...args) {
        args = args.map(l => typeof l === "string" ? chalk_1.default.redBright(l) : l);
        console.log(chalk_1.default.redBright(`! Could not run Jod.js:`, ...args));
        process.exit(1);
    },
    success(...args) {
        args = args.map(l => typeof l === "string" ? chalk_1.default.greenBright(l) : l);
        console.log(chalk_1.default.greenBright(`✓ [${Date().split(" ")[4]}]:`, ...args));
    }
};
exports.default = Logger;
//# sourceMappingURL=Logger.js.map