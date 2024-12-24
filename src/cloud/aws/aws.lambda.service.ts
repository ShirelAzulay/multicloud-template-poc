import { Injectable } from '@nestjs/common';
import { Lambda } from 'aws-sdk';

@Injectable()
export class AwsLambdaService {
    private lambda: Lambda;

    constructor() {
        this.lambda = new Lambda();
    }

    // List Lambda functions
    async listFunctions(): Promise<string[]> {
        const result = await this.lambda.listFunctions().promise();
        return result.Functions?.map(func => func.FunctionName || '') || [];
    }

    // Invoke a Lambda function
    async invokeFunction(functionName: string, payload: Record<string, unknown>): Promise<Lambda.InvocationResponse> {
        return this.lambda.invoke({
            FunctionName: functionName,
            Payload: JSON.stringify(payload),
        }).promise();
    }

    // Delete a Lambda function
    async deleteFunction(functionName: string): Promise<void> {
        await this.lambda.deleteFunction({ FunctionName: functionName }).promise();
    }
}
