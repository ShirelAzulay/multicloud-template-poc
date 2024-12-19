import { NestFactory } from '@nestjs/core';
import { GenAIAwsModule } from './users/app.module';
import * as dotenv from 'dotenv';
dotenv.config();// Load environment variables from .env file


async function bootstrap() {

  const app = await NestFactory.create(GenAIAwsModule);
  await app.listen(3000);
}

// This ensures the Promise is not ignored.
void bootstrap();
