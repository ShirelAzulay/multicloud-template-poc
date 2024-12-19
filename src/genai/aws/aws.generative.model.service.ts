import { Injectable } from '@nestjs/common';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

@Injectable()
export class AwsGenerativeModelService {
    private client: BedrockRuntimeClient;

    constructor() {
        const region = process.env.AWS_REGION;
        const accessKeyId = process.env.AWS_ACCESS_KEY;
        const secretAccessKey = process.env.AWS_SECRET_KEY;

        // Validate environment variables
        if (!region || !accessKeyId || !secretAccessKey) {
            throw new Error('Missing AWS configuration: AWS_REGION, AWS_ACCESS_KEY_ID, or AWS_SECRET_ACCESS_KEY');
        }

        // Initialize AWS Bedrock client
        this.client = new BedrockRuntimeClient({
            region,
            credentials: {
                accessKeyId,
                secretAccessKey,
            },
        });
    }

    // Generate text from AWS Bedrock
    async askQuestion(prompt: string): Promise<string> {
        try {
            const command = new InvokeModelCommand({
                modelId: 'anthropic.claude-v2', // AWS Bedrock model
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens_to_sample: 256,
                    temperature: 0.7,
                }),
                contentType: 'application/json',
            });

            const response = await this.client.send(command);

            // Parse and return completion response
            const responseBody = JSON.parse(response.body!.toString());
            return responseBody.completion || 'No response generated.';
        } catch (error) {
            console.error('Error generating text:', error);
            throw new Error('Failed to generate text.');
        }
    }
}
