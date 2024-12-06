
import { Injectable } from '@nestjs/common';
import { CloudWatchClient, PutMetricDataCommand } from '@aws-sdk/client-cloudwatch';

@Injectable()
export class AwsCloudWatchService {
    private client = new CloudWatchClient({ region: process.env.AWS_REGION });

    async putMetric(metricName: string, value: number): Promise<void> {
        const command = new PutMetricDataCommand({
            Namespace: 'CustomNamespace',
            MetricData: [
                {
                    MetricName: metricName,
                    Value: value,
                },
            ],
        });
        await this.client.send(command);
    }
}
