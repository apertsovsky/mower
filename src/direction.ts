export enum Direction {
    North = 0,
    East = 1,
    South = 2,
    West = 3
}

export enum RotateDirection {
    Left,
    Right
}

export function rotate(direction: Direction, rotateDirection: RotateDirection): Direction {
    let newDirection: number = rotateDirection === RotateDirection.Left ? direction - 1: direction + 1;
    return ((newDirection + 4) % 4) as Direction;
}

export function getDisplayName(direction: Direction): string {
    switch (direction) {
        case Direction.East:
            return 'E';
        case Direction.North:
            return 'N';
        case Direction.South:
            return 'S';
        case Direction.West:
            return 'W';
    }
}

export function parseDirection(stringValue: string): Direction {
    switch(stringValue) {
        case 'E':
            return Direction.East;
        case 'N':
            return Direction.North;
        case 'W':
            return Direction.West;
        case 'S':
            return Direction.South;
        default:
            throw new Error('Unsupported direction string');
    }
}
