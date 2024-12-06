
import { Injectable } from '@nestjs/common';
import { CosmosClient } from '@azure/cosmos';

@Injectable()
export class AzureCosmosDbService {
    private client = new CosmosClient(process.env.AZURE_COSMOS_CONNECTION_STRING || '');

    async createItem(database: string, container: string, item: any): Promise<void> {
        const db = this.client.database(database);
        const cnt = db.container(container);        await cnt.items.create(item);
    }
}
