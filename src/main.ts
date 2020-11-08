import createMower from "./createMower";
import Lawn from "./lawn";
import { Mower } from "./mower";

import { ReadLine, createInterface } from "readline";
import * as fs from "fs";
import FileReporter from "./Impl/fileReporter";
import createLawn from "./createLawn";
import executeCommands from "./executeCommands";

import { Logger } from "tslog";
import createLogger from "./Logging/createFileLogger";

const logger: Logger = createLogger();

(async () =>  {
    const fileStream: fs.ReadStream = fs.createReadStream('input.txt');
    const readLine: ReadLine = createInterface({
        input: fileStream
    });
 
    let lawn: Lawn = null as any;
    let mowerConfigLine: string = '';
    let fileReporter: FileReporter = new FileReporter("output.txt");
    try {
        for await (const line of readLine) {
            if (lawn === null) {
                lawn = createLawn(line); 
                logger.debug('Lawn initialized');  
            } else {
                if (mowerConfigLine === '') {
                    mowerConfigLine = line;
                } else {
                    try {
                        let mower: Mower = createMower(lawn, mowerConfigLine, fileReporter);
                        await executeCommands(mower, line);
                        logger.debug('Mower completed');
                    } catch (error) {
                        logger.error(`Failed to proces mower ${error}`);
                        await fileReporter.report('Failed to process mower see logs.txt for details');    
                    }
                    mowerConfigLine = '';
                }
            }
        }
        if (mowerConfigLine !== '') {
            logger.warn('Last mower has no commands to execute');
            await fileReporter.report('Last mower has no commands to execute'); 
        }
    } catch (error) {
        logger.error(`Error occured ${error}`)
    }
    finally {
        readLine.close();
        fileStream.close();
    }
})();