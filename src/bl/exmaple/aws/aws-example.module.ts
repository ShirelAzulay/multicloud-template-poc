import { Module } from '@nestjs/common';
import { AwsExampleController } from './aws-example.controller';
import { AwsExampleService } from './aws-example.service';
import { AwsS3Service } from '../../../cloud/aws/aws.s3.service';
import { AwsSESService } from '../../../cloud/aws/aws.ses.service';
import { AwsSNSService } from '../../../cloud/aws/aws.sns.service';
import { AwsLambdaService } from '../../../cloud/aws/aws.lambda.service';
import { AwsDynamoDBService } from '../../../cloud/aws/aws.dynamodb.service';
import { AwsCloudWatchService } from '../../../cloud/aws/aws.cloudwatch.service';
import { AwsStepFunctionsService } from '../../../cloud/aws/aws.stepfunctions.service';

@Module({
    controllers: [AwsExampleController],
    providers: [
        AwsExampleService,
        AwsS3Service,
        AwsSESService,
        AwsSNSService,
        AwsLambdaService,
        AwsDynamoDBService,
        AwsCloudWatchService,
        AwsStepFunctionsService,
    ],
})
export class AwsExampleModule {}
