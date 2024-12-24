import { Injectable } from '@nestjs/common';
import { CloudWatchLogs } from 'aws-sdk';

@Injectable()
export class AwsCloudWatchService {
    private cloudWatchLogs: CloudWatchLogs;

    constructor() {
        this.cloudWatchLogs = new CloudWatchLogs();
    }

    // List log groups
    async describeLogGroups(): Promise<string[]> {
        const result = await this.cloudWatchLogs.describeLogGroups().promise();
        return result.logGroups?.map(logGroup => logGroup.logGroupName || '') || [];
    }
}
