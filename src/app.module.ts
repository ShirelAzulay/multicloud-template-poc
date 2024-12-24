import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AwsModule } from './cloud/aws/aws.module';
import {AwsExampleModule} from "./bl/exmaple/aws/aws-example.module";
import {GenAIAwsModule} from "./genai/aws/aws.module";
import { GcpModule } from './cloud/gcp/gcp.module';
import { AzureModule } from './cloud/azure/azure.module';
import { GenAIModule } from './genai/genai.module';
import {UsersModule} from "./bl/users/users.module";

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AwsModule,
    GenAIAwsModule,
    AwsExampleModule,
    GcpModule,
    AzureModule,
    GenAIModule,
  ],
})
export class AppModule {}
