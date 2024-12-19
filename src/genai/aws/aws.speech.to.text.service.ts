import { Injectable } from '@nestjs/common';
import {
    TranscribeClient,
    StartTranscriptionJobCommand,
    GetTranscriptionJobCommand,
} from '@aws-sdk/client-transcribe';

@Injectable()
export class AwsSpeechToTextService {
    private client: TranscribeClient;

    constructor() {
        const region = process.env.AWS_REGION;
        const accessKeyId = process.env.AWS_ACCESS_KEY;
        const secretAccessKey = process.env.AWS_SECRET_KEY;

        // Validate environment variables
        if (!region || !accessKeyId || !secretAccessKey) {
            throw new Error('Missing AWS credentials: AWS_REGION, AWS_ACCESS_KEY_ID, or AWS_SECRET_ACCESS_KEY');
        }

        this.client = new TranscribeClient({
            region,
            credentials: { accessKeyId, secretAccessKey },
        });
    }

    async convertSpeechToText(bucket: string, key: string): Promise<string> {
        const jobName = `transcription-job-${Date.now()}`;

        try {
            // Start transcription job
            const startCommand = new StartTranscriptionJobCommand({
                TranscriptionJobName: jobName,
                LanguageCode: 'en-US',
                Media: {
                    MediaFileUri: `s3://${bucket}/${key}`,
                },
                OutputBucketName: bucket,
            });

            await this.client.send(startCommand);

            console.log('Transcription job started:', jobName);

            // Poll for job completion
            let status = 'IN_PROGRESS';
            while (status === 'IN_PROGRESS') {
                const getCommand = new GetTranscriptionJobCommand({
                    TranscriptionJobName: jobName,
                });
                const response = await this.client.send(getCommand);
                status = response.TranscriptionJob?.TranscriptionJobStatus || 'FAILED';

                if (status === 'COMPLETED') {
                    return response.TranscriptionJob?.Transcript?.TranscriptFileUri || '';
                }

                if (status === 'FAILED') {
                    throw new Error('Transcription job failed.');
                }

                // Wait before polling again
                await new Promise((resolve) => setTimeout(resolve, 5000));
            }

            throw new Error('Unexpected job status.');
        } catch (error) {
            console.error('Error in speech-to-text service:', error);
            throw new Error('Failed to convert speech to text.');
        }
    }
}
