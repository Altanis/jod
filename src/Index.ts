import fs from "fs";

import Parser from "./Parser/Parser";
import Logger from "./Utils/Logger";

class Index {
    /** The parser which interprets the code. */
    private parser = new Parser();

    constructor(path: string) {
        console.log(path);
        this.#setup(path);
    }

    #setup(path: string) {
        if (!path) Logger.err("Interpreter does not support modular systems.");
        if (!path.endsWith(".jod")) Logger.err("Input file is not of JOD extension.");

        fs.readFile(path, (err, data) => {
            if (err) Logger.err(err, true);
            console.log(data);
            this.parser.set(data.toString());
        });
    }
}

export default Index;