import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class AwsS3Service {
    private s3: S3;

    constructor() {
        this.s3 = new S3();
    }

    // List all buckets
    async listBuckets(): Promise<string[]> {
        const result = await this.s3.listBuckets().promise();
        return result.Buckets?.map(bucket => bucket.Name || '') || [];
    }

    // Upload a file
    async uploadFile(bucketName: string, key: string, body: Buffer | string): Promise<S3.PutObjectOutput> {
        return this.s3.putObject({ Bucket: bucketName, Key: key, Body: body }).promise();
    }

    // Delete a file
    async deleteFile(bucketName: string, key: string): Promise<S3.DeleteObjectOutput> {
        return this.s3.deleteObject({ Bucket: bucketName, Key: key }).promise();
    }

    // Get bucket location
    async getBucketLocation(bucketName: string): Promise<S3.GetBucketLocationOutput> {
        return this.s3.getBucketLocation({ Bucket: bucketName }).promise();
    }
}
