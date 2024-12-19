import { Module } from '@nestjs/common';
import {AwsGenerativeModelService} from "../genai/aws/aws.generative.model.service";
import {AwsImageRecognitionService} from "../genai/aws/aws.image.recognition.service";
import {AwsSpeechToTextService} from "../genai/aws/aws.speech.to.text.service";
import {AwsGenAIController} from "../example-controllers/aws/aws-genai.controller";


@Module({
  providers: [
    AwsGenerativeModelService,
    AwsImageRecognitionService,
    AwsSpeechToTextService,
  ],
  controllers: [AwsGenAIController],
  exports: [
    AwsGenerativeModelService,
    AwsImageRecognitionService,
    AwsSpeechToTextService,
  ],
})
export class GenAIAwsModule {}
