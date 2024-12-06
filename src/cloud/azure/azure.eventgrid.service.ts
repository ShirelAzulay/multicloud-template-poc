
import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureEventGridService {
    async publishEvent(eventTopicUrl: string, payload: object): Promise<void> {
        console.log('Publishing event to Azure Event Grid:', eventTopicUrl, payload);
        // Mock response for now
    }
}
