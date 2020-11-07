import * as fs from "fs";
import { ILogObject, Logger } from "tslog";

export default function createLogger(): Logger {
    let logger: Logger = new Logger();
    logger.attachTransport(
        {
          silly: logToTransport,
          debug: logToTransport,
          trace: logToTransport,
          info: logToTransport,
          warn: logToTransport,
          error: logToTransport,
          fatal: logToTransport,
        },
        "debug"
      );

      return logger;
}

async function logToTransport(logObject: ILogObject) {
    await fs.promises.appendFile("logs.txt", JSON.stringify(logObject) + "\n");
}