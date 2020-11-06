import createMower from "./createMower";
import Lawn from "./lawn";
import { Mower } from "./mower";

import { ReadLine, createInterface } from "readline";
import * as fs from "fs";
import FileReporter from "./Impl/fileReporter";
import createLawn from "./createLawn";
import executeCommands from "./executeCommands";

import { Logger } from "tslog";

const logger = new Logger();

(async () =>  {
    const fileStream: fs.ReadStream = fs.createReadStream('input.txt');
    const readLine: ReadLine = createInterface({
        input: fileStream
    });
 
    let lawn: Lawn = null as any;
    let mower: Mower = null as any;
    try {
        for await (const line of readLine) {
            if (lawn === null) {
                lawn = createLawn(line); 
                logger.debug('Lawn initialized');  
            } else {
                if (mower === null) {
                    mower = createMower(lawn, line, new FileReporter());
                    logger.debug('Mower initialized'); 
                } else {
                    executeCommands(mower, line);
                    logger.debug('Mower completed'); 
                    mower = null as any;
                }
            }
        }
    } catch (error) {
        logger.error(`Error occured ${error}`)
    }
    finally {
        readLine.close();
        fileStream.close();
    }
})();