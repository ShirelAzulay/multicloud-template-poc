
import { Injectable } from '@nestjs/common';
import { BlobServiceClient } from '@azure/storage-blob';

@Injectable()
export class AzureBlobService {
    private blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING || '');
    async uploadBlob(containerName: string, blobName: string, content: Buffer): Promise<void> {
        const containerClient = this.blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(content, content.length);
    }
}

/**
 * Example Usage:
 * const blobService = new AzureBlobService();
 * await blobService.uploadBlob('my-container', 'my-blob', Buffer.from('Hello, Azure!'));
 */
