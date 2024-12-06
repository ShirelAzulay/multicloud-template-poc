
import { Injectable } from '@nestjs/common';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

@Injectable()
export class AwsSNSService {
    private snsClient = new SNSClient({ region: process.env.AWS_REGION });

    async publishMessage(topicArn: string, message: string): Promise<void> {
        const command = new PublishCommand({ TopicArn: topicArn, Message: message });
        await this.snsClient.send(command);
    }
}
