import CommandCodes from "./commandCodes";
import Commands from "./commands";
import { Mower } from "./mower";

export default function executeCommands(mower: Mower, commands: string): void {
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i]; 
        switch (command) {
            case CommandCodes.moveForward:
                mower.executeCommand(Commands.MoveForward);
                break;
            case CommandCodes.turnLeft:
                mower.executeCommand(Commands.TurnLeft);
                break;
            case CommandCodes.turnRight:
                mower.executeCommand(Commands.TurnRight);
                break;
            default:
                console.log(command);
                throw new Error('Invalid command symbol')
        }      
    }
    mower.completeMovement();
}