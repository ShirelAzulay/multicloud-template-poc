
import { Injectable } from '@nestjs/common';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

@Injectable()
export class AwsSESService {
    private sesClient = new SESClient({ region: process.env.AWS_REGION });

    async sendEmail(from: string, to: string, subject: string, body: string): Promise<void> {
        const command = new SendEmailCommand({
            Source: from,
            Destination: { ToAddresses: [to] },
            Message: {
                Subject: { Data: subject },
                Body: { Text: { Data: body } },
            },
        });
        await this.sesClient.send(command);
    }
}
