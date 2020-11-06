import { expect } from "chai";
import Lawn from "../src/lawn";

describe('lawn', function() {
    describe('xPositionFits', function(){
        it('lessThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.xPositionFits(-10)).false;
        });

        it('largerThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.xPositionFits(10)).false;
        });

        it('lessThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.xPositionFits(3)).true;
        });
    });

    describe('yPositionFits', function(){
        it('lessThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.yPositionFits(-10)).false;
        });

        it('largerThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.yPositionFits(10)).false;
        });

        it('lessThenSize', function() {
            let lawn: Lawn = new Lawn(5, 5);
            expect(lawn.yPositionFits(3)).true;
        });
    });
});