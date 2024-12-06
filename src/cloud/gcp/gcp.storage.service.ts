
import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class GcpStorageService {
    private storage = new Storage();

    async uploadFile(bucketName: string, fileName: string, content: Buffer): Promise<void> {
        const bucket = this.storage.bucket(bucketName);
        const file = bucket.file(fileName);
        await file.save(content);
    }
}
