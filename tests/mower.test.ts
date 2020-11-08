import { expect } from "chai";
import Commands from "../src/commands";
import { Direction } from "../src/direction";
import InMemoryMowerReporter from "../src/Impl/inMemoryReporter";
import Lawn from "../src/lawn";
import { Mower } from "../src/mower";
import { MowerReporter } from "../src/mowerReporter";

describe('mower', async function() {
    describe('north', async function() {
        it('turn left', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.North, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnLeft);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 W');
        });

        it('turn right', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.North, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnRight);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 E');
        });

        it('oneMoveCommand', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.North, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 3 N');
        });

        it('does not leave lawn', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.North, 2, 5, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 5 N');
        });
    });

    describe('west', async function() {
        it('turn left', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.West, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnLeft);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 S');
        });

        it('turn right', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.West, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnRight);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 N');
        });

        it('oneMoveCommand', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.West, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('1 2 W');
        });

        it('does not leave lawn', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.West, 0, 5, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('0 5 W');
        });
    });

    describe('south', async function() {
        it('turn left', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.South, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnLeft);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 E');
        });

        it('turn right', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.South, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnRight);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 W');
        });

        it('oneMoveCommand', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.South, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 1 S');
        });

        it('does not leave lawn', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.South, 0, 0, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('0 0 S');
        });
    });

    describe('east', async function() {
        it('turn left', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.East, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnLeft);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 N');
        });

        it('turn right', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.East, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.TurnRight);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('2 2 S');
        });

        it('oneMoveCommand', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.East, 2, 2, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('3 2 E');
        });

        it('does not leave lawn', async function() {
            let inMemoryReporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = new Mower(Direction.East, 5, 5, new Lawn(5, 5), inMemoryReporter);
            mower.executeCommand(Commands.MoveForward);
            await mower.completeMovement();

            expect(inMemoryReporter.reportedContent).equal('5 5 E');
        });
    });
});