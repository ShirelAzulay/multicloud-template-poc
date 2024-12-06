
import { Injectable } from '@nestjs/common';

@Injectable()
export class AwsCloudWatchService {
    async logMetric(namespace: string, metricName: string, value: number): Promise<void> {
        console.log('Logging metric:', namespace, metricName, value);
        // Add real SDK logic here
    }
}
