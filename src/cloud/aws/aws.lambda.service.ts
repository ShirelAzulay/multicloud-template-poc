
import { Injectable } from '@nestjs/common';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
@Injectable()
export class AwsLambdaService {
    private lambdaClient = new LambdaClient({ region: process.env.AWS_REGION });

    async invokeFunction(functionName: string, payload: object): Promise<object> {
        const command = new InvokeCommand({ FunctionName: functionName, Payload: Buffer.from(JSON.stringify(payload)) });
        const response = await this.lambdaClient.send(command);
        return JSON.parse(new TextDecoder('utf-8').decode(response.Payload));
    }
}
