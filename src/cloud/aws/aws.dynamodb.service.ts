import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';

@Injectable()
export class AwsDynamoDBService {
    private dynamoDB: DynamoDB;

    constructor() {
        this.dynamoDB = new DynamoDB();
    }

    // List DynamoDB tables
    async listTables(): Promise<string[]> {
        const result = await this.dynamoDB.listTables().promise();
        return result.TableNames || [];
    }

    // Get table information
    async describeTable(tableName: string): Promise<DynamoDB.DescribeTableOutput> {
        return this.dynamoDB.describeTable({ TableName: tableName }).promise();
    }
}
