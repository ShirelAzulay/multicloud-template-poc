
import { Injectable } from '@nestjs/common';
import { APIGatewayClient, CreateRestApiCommand } from '@aws-sdk/client-api-gateway';

@Injectable()
export class AwsApiGatewayService {
    private apiGatewayClient = new APIGatewayClient({ region: process.env.AWS_REGION });

    async createApi(apiName: string): Promise<void> {
        const command = new CreateRestApiCommand({ name: apiName });
        await this.apiGatewayClient.send(command);
    }
}
