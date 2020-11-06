import { expect } from "chai";
import createLawn from "../src/createLawn";
import createMower from "../src/createMower";
import executeCommands from "../src/executeCommands";
import InMemoryMowerReporter from "../src/Impl/inMemoryReporter";
import Lawn from "../src/lawn";
import { Mower } from "../src/mower";

describe ('executeCommands', function() {
    it ('validates command', function() {
        let lawn: Lawn = createLawn('3 3');
        let mower: Mower = createMower(lawn, '0 0 N', new InMemoryMowerReporter());
        
        expect(function() {executeCommands(mower, 'UXF');}).throw('Invalid command symbol');
    });

    describe('sends command', function() {
        it ('turns left', function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            executeCommands(mower, 'L');
            expect(reporter.reportedContent).equal('1 1 W');
        });

        it ('turns right', function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            executeCommands(mower, 'R');
            expect(reporter.reportedContent).equal('1 1 E');
        });

        it ('move forward', function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            executeCommands(mower, 'F');
            expect(reporter.reportedContent).equal('1 2 N');
        });
    })
});