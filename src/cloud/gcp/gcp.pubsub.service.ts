
import { Injectable } from '@nestjs/common';
import { PubSub } from '@google-cloud/pubsub';

@Injectable()
export class GcpPubSubService {
    private pubSubClient = new PubSub();

    async publishMessage(topicName: string, message: string): Promise<void> {
        const topic = this.pubSubClient.topic(topicName);
        await topic.publish(Buffer.from(message));
    }
}
