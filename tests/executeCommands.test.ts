import { rejects } from "assert";
import { expect } from "chai";
import createLawn from "../src/createLawn";
import createMower from "../src/createMower";
import executeCommands from "../src/executeCommands";
import InMemoryMowerReporter from "../src/Impl/inMemoryReporter";
import Lawn from "../src/lawn";
import { Mower } from "../src/mower";

describe ('executeCommands', async function() {
    it ('validates command', async function() {
        let lawn: Lawn = createLawn('3 3');
        let mower: Mower = createMower(lawn, '0 0 N', new InMemoryMowerReporter());
        
        await rejects(executeCommands(mower, 'UXF'));
    });

    describe('sends command', async function() {
        it ('turns left', async function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            await executeCommands(mower, 'L');
            expect(reporter.reportedContent).equal('1 1 W');
        });

        it ('turns right',async function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            await executeCommands(mower, 'R');
            expect(reporter.reportedContent).equal('1 1 E');
        });

        it ('move forward', async function() {
            let lawn: Lawn = createLawn('3 3');
            let reporter: InMemoryMowerReporter = new InMemoryMowerReporter();
            let mower: Mower = createMower(lawn, '1 1 N', reporter);
            
            await executeCommands(mower, 'F');
            expect(reporter.reportedContent).equal('1 2 N');
        });
    })
});