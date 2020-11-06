import { Direction, getDisplayName, rotate, RotateDirection } from "./direction";
import Lawn from "./lawn";
import { MowerReporter } from "./mowerReporter";
import Commands from "./commands";

import { Logger } from "tslog";

export class Mower {
   constructor(
    private direction: Direction,   
    private x: number,
    private y: number,
    private readonly lawn: Lawn,
    private readonly reporter: MowerReporter,
    private readonly logger: Logger = new Logger()  
   ) {  
    if (!lawn.xPositionFits(x) || !lawn.yPositionFits(y)) {
        this.logger.error('Initial position outside lawn');
        throw new Error('Failed to create mower: position should be on lawn');
    }     
   }

   public executeCommand(command: Commands): void {
        switch (command) {
            case Commands.TurnLeft: 
                this.direction = rotate(this.direction, RotateDirection.Left);
                break;
            case Commands.TurnRight: 
                this.direction = rotate(this.direction, RotateDirection.Right);
                break;
            case Commands.MoveForward:
                this.move();
                break;
            default:
                this.logger.error('Unknown command');
                throw new Error('Unknown command');
        }
        this.logger.debug(`Command ${command} executed. Current position: x=${this.x}, y=${this.y}. Direction: ${this.direction}`);
   }

   public completeMovement(): void {
       this.logState();
   }

   private logState(): void {
       this.reporter.report(this.x + ' ' + this.y + ' ' + getDisplayName(this.direction));
   }

   private move(): void {
       let newX: number = this.x;
       let newY: number = this.y;

       switch (this.direction) {
            case Direction.North:
                newY += 1;
                break;
            case Direction.South:
                newY -= 1;
                break;
            case Direction.East:
                newX += 1;
                break;
            case Direction.West:
                newX -= 1;
                break;
       }

       if (this.lawn.xPositionFits(newX)) {
           this.x = newX;
       } else {
           this.logger.warn('Did not move as will exit lawn by x');
       }
       if (this.lawn.yPositionFits(newY)) {
           this.y = newY;
       } else {
        this.logger.warn('Did not move as will exit lawn by y');
       }
   }
}