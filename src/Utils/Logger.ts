import chalk from "chalk";

const Logger = {
    log(...args: any[]) {
        console.log(chalk.blue(`ℹ [${Date().split(" ")[4]}]:`, ...args));
    },

    warn(...args: any[]) {
        args = args.map(l => typeof l === "string" ? chalk.yellow(l) : l);
        console.log(chalk.yellow(`⚠ [${Date().split(" ")[4]}]:`, ...args));
    },

    err(...args: any[]) {
        args = args.map(l => typeof l === "string" ? chalk.redBright(l) : l);
        console.log(chalk.redBright(`! Could not run Jod.js:`, ...args));
        process.exit(1);
    },

    success(...args: any[]) {
        args = args.map(l => typeof l === "string" ? chalk.greenBright(l) : l);
        console.log(chalk.greenBright(`✓ [${Date().split(" ")[4]}]:`, ...args));
    }
};

export default Logger;