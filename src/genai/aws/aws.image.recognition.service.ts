import { Injectable } from '@nestjs/common';
import { RekognitionClient, DetectLabelsCommand } from '@aws-sdk/client-rekognition';

@Injectable()
export class AwsImageRecognitionService {
    private client = new RekognitionClient({ region: process.env.AWS_REGION });

    async recognizeImage(bucket: string, imageKey: string): Promise<string[]> {
        const command = new DetectLabelsCommand({
            Image: { S3Object: { Bucket: bucket, Name: imageKey } },
            MaxLabels: 10
        });

        const response = await this.client.send(command);
        return response.Labels?.map(label => label.Name || '') || [];
    }
}
