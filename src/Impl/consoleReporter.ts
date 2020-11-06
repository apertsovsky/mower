import { MowerReporter } from "../mowerReporter";

export default class ConsoleReporter implements MowerReporter {
    public report(state: string): void {
        console.log(state);
    }
}