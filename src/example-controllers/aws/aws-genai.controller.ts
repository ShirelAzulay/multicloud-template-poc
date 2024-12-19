import { AwsGenerativeModelService } from "../../genai/aws/aws.generative.model.service";
import { AwsImageRecognitionService } from "../../genai/aws/aws.image.recognition.service";
import { AwsSpeechToTextService } from "../../genai/aws/aws.speech.to.text.service";
import { Controller, Get } from "@nestjs/common";

@Controller('aws-genai')
export class AwsGenAIController {
    constructor(
        private readonly generativeService: AwsGenerativeModelService,
        private readonly imageRecognitionService: AwsImageRecognitionService,
        private readonly speechService: AwsSpeechToTextService,
    ) {}

    @Get('/generate')
    async generateText() {
        return await this.generativeService.askQuestion("Default prompt");
    }

    @Get('/image-recognition')
    async recognizeImage() {
        const bucket = "example-bucket";// Replace with your bucket name
        const imageKey = "example-image.jpg"; // Replace with your image key
        return await this.imageRecognitionService.recognizeImage(bucket, imageKey);
    }

    @Get('/speech-to-text')
    async convertSpeechToText() {
        const bucket = 'example-bucket'; // Replace with actual bucket name
        const key = 'example-audio-file.mp3'; // Replace with actual file key in S3
        return await this.speechService.convertSpeechToText(bucket, key);
    }

}
