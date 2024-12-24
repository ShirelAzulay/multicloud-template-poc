import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import {GenAIAwsModule} from "./genai/aws/aws.module";
dotenv.config();// Load environment variables from .env file


async function bootstrap() {

  const app = await NestFactory.create(GenAIAwsModule);
  await app.listen(3000);
}

// This ensures the Promise is not ignored.
void bootstrap();
