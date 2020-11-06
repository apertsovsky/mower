import { expect } from "chai"
import { Direction, getDisplayName, parseDirection, rotate, RotateDirection } from "../src/direction"

describe('direction', function () {
    describe('displaneName', function() {
        it('north', function() {
            expect(getDisplayName(Direction.North)).equal('N');
        });

        it('south', function() {
            expect(getDisplayName(Direction.South)).equal('S');
        });

        it('east', function() {
            expect(getDisplayName(Direction.East)).equal('E');
        });

        it('west', function() {
            expect(getDisplayName(Direction.West)).equal('W');
        });
    });

    describe('parseDirection', function() {
        it('north', function() {
            expect(parseDirection('N')).equal(Direction.North);
        });
        it('south', function() {
            expect(parseDirection('S')).equal(Direction.South);
        });
        it('east', function() {
            expect(parseDirection('E')).equal(Direction.East);
        });
        it('west', function() {
            expect(parseDirection('W')).equal(Direction.West);
        });
        it('invalid', function() {
            expect(function () {parseDirection('D');}).throw('Unsupported direction string');
        });
    });

    describe('rotate', function() {
        describe('north', function() {
            it('left', function() {
                expect(rotate(Direction.North, RotateDirection.Left)).equal(Direction.West);
            });
            it('right', function() {
                expect(rotate(Direction.North, RotateDirection.Right)).equal(Direction.East);
            });
        });

        describe('south', function() {
            it('left', function() {
                expect(rotate(Direction.South, RotateDirection.Left)).equal(Direction.East);
            });
            it('right', function() {
                expect(rotate(Direction.South, RotateDirection.Right)).equal(Direction.West);
            });
        });

        describe('east', function() {
            it('left', function() {
                expect(rotate(Direction.East, RotateDirection.Left)).equal(Direction.North);
            });
            it('right', function() {
                expect(rotate(Direction.East, RotateDirection.Right)).equal(Direction.South);
            });
        });

        describe('west', function() {
            it('left', function() {
                expect(rotate(Direction.West, RotateDirection.Left)).equal(Direction.South);
            });
            it('right', function() {
                expect(rotate(Direction.West, RotateDirection.Right)).equal(Direction.North);
            });
        });
    });
})