
import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureMonitorService {
    async monitorResource(resourceId: string): Promise<void> {
        console.log('Monitoring resource:', resourceId);
        // Mock implementation
    }
}
