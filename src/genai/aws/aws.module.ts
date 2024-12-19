import { Module } from '@nestjs/common';
import { AwsGenerativeModelService } from './aws.generative.model.service';
import { AwsImageRecognitionService } from './aws.image.recognition.service';
import { AwsSpeechToTextService } from './aws.speech.to.text.service';

@Module({
    providers: [
        AwsGenerativeModelService,
        AwsImageRecognitionService,
        AwsSpeechToTextService,
    ],
    exports: [
        AwsGenerativeModelService,
        AwsImageRecognitionService,
        AwsSpeechToTextService,
    ],
})
export class GenAIAwsModule {}
