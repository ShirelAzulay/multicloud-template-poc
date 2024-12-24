import { Injectable } from '@nestjs/common';
import { SES } from 'aws-sdk';

@Injectable()
export class AwsSESService {
    private ses: SES;

    constructor() {
        this.ses = new SES();
    }

    // List verified identities
    async listIdentities(): Promise<string[]> {
        const result = await this.ses.listIdentities().promise();
        return result.Identities || [];
    }

    // Send an email
    async sendEmail(to: string[], subject: string, body: string): Promise<SES.SendEmailResponse> {
        return this.ses
            .sendEmail({
                Destination: { ToAddresses: to },
                Message: {
                    Body: { Text: { Data: body } },
                    Subject: { Data: subject },
                },
                Source: 'your-email@example.com', // Replace with your verified email
            })
            .promise();
    }
}
