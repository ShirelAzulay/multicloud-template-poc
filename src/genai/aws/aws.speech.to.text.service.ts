import { Injectable } from '@nestjs/common';
import { TranscribeClient, StartTranscriptionJobCommand } from '@aws-sdk/client-transcribe';

@Injectable()
export class AwsSpeechToTextService {
    private client = new TranscribeClient({ region: process.env.AWS_REGION });

    async transcribeAudio(audioUrl: string): Promise<string> {
        const command = new StartTranscriptionJobCommand({
            TranscriptionJobName: `Transcription-${Date.now()}`,
            IdentifyLanguage: true,
            Media: { MediaFileUri: audioUrl },
            MediaFormat: 'mp3',
            OutputBucketName: process.env.AWS_OUTPUT_BUCKET
        });

        const response = await this.client.send(command);
        return response.TranscriptionJob?.Transcript?.TranscriptFileUri || '';
    }
}