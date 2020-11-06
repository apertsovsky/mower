import * as fs from "fs";
import { MowerReporter } from "../mowerReporter";

export default class FileReporter implements MowerReporter {
    report(state: string): void {
        fs.appendFile("output.txt", state + "\r\n", () => {});
    }
}