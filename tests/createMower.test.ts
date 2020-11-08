import { expect } from "chai";
import createMower from "../src/createMower";
import InMemoryMowerReporter from "../src/Impl/inMemoryReporter";
import Lawn from "../src/lawn";

describe('createMower', function() {
    it ('not three args', function() {
        let lawn: Lawn = new Lawn(4, 4);
        expect(function() {createMower(lawn, 'x 4', new InMemoryMowerReporter())}).throw('Failed to create mower: invalid inputLine');
    });

    it ('validatesXisNumber', function() {
        let lawn: Lawn = new Lawn(4, 4);
        expect(function() {createMower(lawn, 'x 4 N', new InMemoryMowerReporter())}).throw('Failed to create mower: invalid inputLine');
    });

    it ('validatesYisNumber', function() {
        let lawn: Lawn = new Lawn(4, 4);
        expect(function() {createMower(lawn, '4 y N', new InMemoryMowerReporter())}).throw('Failed to create mower: invalid inputLine');
    });

    describe('validate position on lawn', function() {
        it ('x < 0', function() {
            let lawn: Lawn = new Lawn(4, 4);
            expect(function() {createMower(lawn, '-2 1 N', new InMemoryMowerReporter())}).throw('Failed to create mower: position should be on lawn');
        });

        it ('y < 0', function() {
            let lawn: Lawn = new Lawn(4, 4);
            expect(function() {createMower(lawn, '2 -1 N', new InMemoryMowerReporter())}).throw('Failed to create mower: position should be on lawn');
        });

        it ('x > lawn.size', function() {
            let lawn: Lawn = new Lawn(4, 4);
            expect(function() {createMower(lawn, '5 0 N', new InMemoryMowerReporter())}).throw('Failed to create mower: position should be on lawn');
        });

        it ('y > lawn.size', function() {
            let lawn: Lawn = new Lawn(4, 4);
            expect(function() {createMower(lawn, '0 5 N', new InMemoryMowerReporter())}).throw('Failed to create mower: position should be on lawn');
        });
    });
});