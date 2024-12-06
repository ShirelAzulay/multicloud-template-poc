
import { Injectable } from '@nestjs/common';
import { Logging } from '@google-cloud/logging';

@Injectable()
export class GcpLoggingService {
    private logging = new Logging();

    async logMessage(logName: string, message: string): Promise<void> {
        const log = this.logging.log(logName);
        const entry = log.entry({}, message);
        await log.write(entry);
    }
}
