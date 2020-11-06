export default class Lawn {
    constructor(
        readonly sizeX: number,
        readonly sizeY: number
    ){
        if (sizeX < 0 || sizeY < 0) {
            throw new Error('Failed to create lawn: size should be positive');
        }
    }

    public xPositionFits(x: number) {
        return x >= 0 && x <= this.sizeX;
    }

    public yPositionFits(y: number) {
        return y >= 0 && y <= this.sizeY;
    }
}