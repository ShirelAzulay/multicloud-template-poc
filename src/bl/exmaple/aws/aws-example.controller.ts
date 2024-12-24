import { Controller, Get } from '@nestjs/common';
import { AwsExampleService } from './aws-example.service';

@Controller('aws-example')
export class AwsExampleController {
    constructor(private readonly awsExampleService: AwsExampleService) {}

    // S3 Methods
    @Get('s3/buckets')
    async listBuckets(): Promise<string[]> {
        return await this.awsExampleService.listBuckets();
    }

    // SNS Methods
    @Get('sns/topics')
    async listTopics(): Promise<string[]> {
        return await this.awsExampleService.listTopics();
    }

    // Lambda Methods
    @Get('lambda/functions')
    async listFunctions(): Promise<string[]> {
        return await this.awsExampleService.listFunctions();
    }

    @Get('lambda/invoke')
    async invokeFunction(): Promise<any> {
        const functionName = 'your-function-name'; // Replace with your Lambda function name
        const payload = { key: 'value' }; // Replace with your payload
        return await this.awsExampleService.invokeFunction(functionName, payload);
    }

    // DynamoDB Methods
    @Get('dynamodb/tables')
    async listTables(): Promise<string[]> {
        return await this.awsExampleService.listTables();
    }

    @Get('dynamodb/table-info')
    async describeTable(): Promise<any> {
        const tableName = 'your-table-name'; // Replace with your DynamoDB table name
        return await this.awsExampleService.describeTable(tableName);
    }

    // CloudWatch Methods
    @Get('cloudwatch/log-groups')
    async describeLogGroups(): Promise<string[]> {
        return await this.awsExampleService.describeLogGroups();
    }

    // Step Functions Methods
    @Get('stepfunctions/state-machines')
    async listStateMachines(): Promise<string[]> {
        return await this.awsExampleService.listStateMachines();
    }

    @Get('stepfunctions/start-execution')
    async startExecution(): Promise<any> {
        const stateMachineArn = 'your-state-machine-arn'; // Replace with your state machine ARN
        const input = { key: 'value' }; // Replace with your input
        return await this.awsExampleService.startExecution(stateMachineArn, input);
    }

    // SES Methods
    @Get('ses/identities')
    async listIdentities(): Promise<string[]> {
        return await this.awsExampleService.listIdentities();
    }

    @Get('ses/send-email')
    async sendEmail(): Promise<any> {
        const to = ['recipient@example.com']; // Replace with recipient email addresses
        const subject = 'Test Subject';
        const body = 'This is a test email.';
        return await this.awsExampleService.sendEmail(to, subject, body);
    }
}
