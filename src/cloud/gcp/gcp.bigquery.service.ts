
import { Injectable } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';

@Injectable()
export class GcpBigQueryService {
    private bigQueryClient = new BigQuery();

    async executeQuery(query: string): Promise<any> {
        const [rows] = await this.bigQueryClient.query(query);
        return rows;
    }
}
