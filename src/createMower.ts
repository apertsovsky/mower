import { Direction, parseDirection } from "./direction";
import { Mower } from "./mower";
import Lawn from "./lawn";
import { MowerReporter } from "./mowerReporter";

export default function createMower(lawn: Lawn, inputLine: string, reporter: MowerReporter): Mower {
    let args: string[] = inputLine.split(' ');
    
    if (args.length !== 3) {
        throw new Error('Failed to create mower: invalid inputLine');
    }

    let xPos: number = parseInt(args[0]);  
    let yPos: number = parseInt(args[1]);

    if (isNaN(xPos)) {
        throw new Error('Failed to create mower: invalid inputLine');
    }

    if (isNaN(yPos)) {
        throw new Error('Failed to create mower: invalid inputLine');
    }

    let direction: Direction = parseDirection(args[2]);

    return new Mower(direction, xPos, yPos, lawn, reporter);
}