import { Injectable } from '@nestjs/common';
import { AwsS3Service } from '../../../cloud/aws/aws.s3.service';
import { AwsSNSService } from '../../../cloud/aws/aws.sns.service';
import { AwsLambdaService } from '../../../cloud/aws/aws.lambda.service';
import { AwsDynamoDBService } from '../../../cloud/aws/aws.dynamodb.service';
import { AwsCloudWatchService } from '../../../cloud/aws/aws.cloudwatch.service';
import { AwsStepFunctionsService } from '../../../cloud/aws/aws.stepfunctions.service';
import { AwsSESService } from '../../../cloud/aws/aws.ses.service';


@Injectable()
export class AwsExampleService {
    constructor(
        private readonly s3Service: AwsS3Service,
        private readonly snsService: AwsSNSService,
        private readonly lambdaService: AwsLambdaService,
        private readonly dynamoDBService: AwsDynamoDBService,
        private readonly cloudWatchService: AwsCloudWatchService,
        private readonly stepFunctionsService: AwsStepFunctionsService,
        private readonly sesService: AwsSESService,
    ) {}

    // =======================
    // S3 Methods
    // =======================

    /**
     * List all buckets in the AWS S3 account
     * @returns {Promise<string[]>} Array of bucket names
     */
    async listBuckets(): Promise<string[]> {
        return this.s3Service.listBuckets();
    }

    // =======================
    // SNS Methods
    // =======================

    /**
     * List all topics in AWS SNS
     * @returns {Promise<string[]>} Array of topic ARNs
     */
    async listTopics(): Promise<string[]> {
        return this.snsService.listTopics();
    }

    // =======================
    // Lambda Methods
    // =======================

    /**
     * List all Lambda functions in the AWS account
     * @returns {Promise<string[]>} Array of Lambda function names
     */
    async listFunctions(): Promise<string[]> {
        return this.lambdaService.listFunctions();
    }

    /**
     * Invoke a specific Lambda function
     * @param functionName The name of the Lambda function to invoke
     * @param payload The payload to send to the Lambda function
     * @returns {Promise<any>} The response from the Lambda function
     */
    async invokeFunction(functionName: string, payload: Record<string, unknown>): Promise<any> {
        return this.lambdaService.invokeFunction(functionName, payload);
    }

    // =======================
    // DynamoDB Methods
    // =======================

    /**
     * List all DynamoDB tables in the AWS account
     * @returns {Promise<string[]>} Array of table names
     */
    async listTables(): Promise<string[]> {
        return this.dynamoDBService.listTables();
    }

    /**
     * Get detailed information about a DynamoDB table
     * @param tableName The name of the table to describe
     * @returns {Promise<any>} The details of the DynamoDB table
     */
    async describeTable(tableName: string): Promise<any> {
        return this.dynamoDBService.describeTable(tableName);
    }

    // =======================
    // CloudWatch Methods
    // =======================

    /**
     * List all CloudWatch log groups in the AWS account
     * @returns {Promise<string[]>} Array of log group names
     */
    async describeLogGroups(): Promise<string[]> {
        return this.cloudWatchService.describeLogGroups();
    }

    // =======================
    // Step Functions Methods
    // =======================

    /**
     * List all Step Functions state machines in the AWS account
     * @returns {Promise<string[]>} Array of state machine names
     */
    async listStateMachines(): Promise<string[]> {
        return this.stepFunctionsService.listStateMachines();
    }

    /**
     * Start the execution of a Step Functions state machine
     * @param stateMachineArn The ARN of the state machine to start
     * @param input The input to pass to the state machine
     * @returns {Promise<any>} The result of the execution
     */
    async startExecution(stateMachineArn: string, input: Record<string, unknown>): Promise<any> {
        return this.stepFunctionsService.startExecution(stateMachineArn, input);
    }

    // =======================
    // SES Methods
    // =======================

    /**
     * List all verified identities in AWS SES
     * @returns {Promise<string[]>} Array of verified identities
     */
    async listIdentities(): Promise<string[]> {
        return this.sesService.listIdentities();
    }

    /**
     * Send an email using AWS SES
     * @param to Array of recipient email addresses
     * @param subject The subject of the email
     * @param body The body of the email
     * @returns {Promise<any>} The response from AWS SES
     */
    async sendEmail(to: string[], subject: string, body: string): Promise<any> {
        return this.sesService.sendEmail(to, subject, body);
    }
}
