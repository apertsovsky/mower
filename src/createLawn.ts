import Lawn from "./lawn";

export default function createLawn(inputLine: string): Lawn {
    let lawnParams: string[] = inputLine.split(' ');
    if (lawnParams.length !== 2) {
        throw new Error('Failed to create lawn: invalid argumnets');
    }

    let xSize: number = parseInt(lawnParams[0]);
    if (isNaN(xSize)) {
        throw new Error('Failed to create lawn: invalid argumnets');
    }

    let ySize: number = parseInt(lawnParams[1]);
    if (isNaN(ySize)) {
        throw new Error('Failed to create lawn: invalid argumnets');
    }

    return new Lawn(xSize, ySize);
}