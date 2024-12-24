import { Injectable } from '@nestjs/common';
import { SNS } from 'aws-sdk';

@Injectable()
export class AwsSNSService {
    private sns: SNS;

    constructor() {
        this.sns = new SNS();
    }

    // List topics
    async listTopics(): Promise<string[]> {
        const result = await this.sns.listTopics().promise();
        return result.Topics?.map(topic => topic.TopicArn || '') || [];
    }

    // Publish a message
    async publishMessage(topicArn: string, message: string): Promise<SNS.PublishResponse> {
        return this.sns.publish({ TopicArn: topicArn, Message: message }).promise();
    }
}
