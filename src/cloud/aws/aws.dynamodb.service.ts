
import { Injectable } from '@nestjs/common';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';

@Injectable()
export class AwsDynamoDBService {
    private dynamoDbClient = new DynamoDBClient({ region: process.env.AWS_REGION});

    async addItem(tableName: string, item: Record<string, any>): Promise<void> {
        const command = new PutItemCommand({
            TableName: tableName,
            Item: item,
        });
        await this.dynamoDbClient.send(command);
    }
}

// Usage Example:
// const dynamoService = new AwsDynamoDBService();
// dynamoService.addItem('my-table', { id: { S: '123' }, name: { S: 'John Doe' } });
