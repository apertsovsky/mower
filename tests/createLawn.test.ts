import { expect } from "chai";
import createLawn from "../src/createLawn";
import Lawn from "../src/lawn";

describe('createLawn', function () {
    it('createsLawnNormal', function() {
        expect(createLawn('5 5')).not.undefined;        
    });

    it('validates input args amount', function() {
        expect(function () {createLawn('5')}).throw('Failed to create lawn: invalid argumnets');
    });

    it('validates input x', function() {
        expect(function () {createLawn('f 5')}).throw('Failed to create lawn: invalid argumnets');
    });

    it('validates input y', function() {
        expect(function () {createLawn('5 a')}).throw('Failed to create lawn: invalid argumnets');
    });

    it('validates x size is positve', function() {
        expect(function () {createLawn('-5 5')}).throw('Failed to create lawn: size should be positive');
    });

    it('validates y size is positve', function() {
        expect(function () {createLawn('5 -5')}).throw('Failed to create lawn: size should be positive');
    });
});