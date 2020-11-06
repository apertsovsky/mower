import { MowerReporter } from "../mowerReporter";

export default class InMemoryMowerReporter implements MowerReporter {
    reportedContent: string = ''; 

    public report(state: string): void {
        this.reportedContent += state;
    }
}