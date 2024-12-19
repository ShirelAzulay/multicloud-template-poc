
import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class AwsS3Service {
    private s3Client = new S3Client({ region: process.env.AWS_REGION});

    async uploadFile(bucketName: string, key: string, content: Buffer): Promise<void> {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: content,
        });
        await this.s3Client.send(command);
    }
}

// Usage Example:
// const s3Service = new AwsS3Service();
// s3Service.uploadFile('my-bucket', 'file.txt', Buffer.from('Hello AWS!'));
