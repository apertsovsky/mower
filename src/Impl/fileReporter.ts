import * as fs from "fs";
import { MowerReporter } from "../mowerReporter";

export default class FileReporter implements MowerReporter {
    constructor(
        private readonly filePath: string,
    ) {}

    public async report(state: string): Promise<void> {
        await fs.promises.appendFile(this.filePath, state + "\r\n");
    }
}