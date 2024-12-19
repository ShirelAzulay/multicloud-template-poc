import { Module } from '@nestjs/common';
import { AwsS3Service } from './aws.s3.service';
import { AwsLambdaService } from './aws.lambda.service';
import { AwsStepFunctionsService } from './aws.stepfunctions.service';
import { AwsSNSService } from './aws.sns.service';
import { AwsCloudWatchService } from './aws.cloudwatch.service';
import { AwsDynamoDBService } from './aws.dynamodb.service';
import { AwsApiGatewayService } from './aws.apigateway.service';

@Module({
    providers: [
        AwsS3Service,
        AwsLambdaService,
        AwsStepFunctionsService,
        AwsSNSService,
        AwsCloudWatchService,
        AwsDynamoDBService,
        AwsApiGatewayService,
    ],
    exports: [
        AwsS3Service,
        AwsLambdaService,
        AwsStepFunctionsService,
        AwsSNSService,
        AwsCloudWatchService,
        AwsDynamoDBService,
        AwsApiGatewayService,
    ],
})
export class AwsModule {}
