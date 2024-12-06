
import { Injectable } from '@nestjs/common';

import loadConfig from '../config/config-loader';
import { AwsS3Service } from './aws/aws.s3.service';
import { GcpPubSubService } from './gcp/gcp.pubsub.service';
import { AzureBlobService } from './azure/azure.blob.service';

@Injectable()
export class MultiCloudService {
    private config = loadConfig('path/to/config.yaml');
    getService(serviceType: string): any {
        const activeClouds = this.config.activeClouds;
        if (serviceType === 'storage' && this.config.services.storage) {
            if (activeClouds.includes('aws')) {
                return new AwsS3Service();
            } else if (activeClouds.includes('gcp')) {
                return new GcpPubSubService();
            } else if (activeClouds.includes('azure')) {
                return new AzureBlobService();
            }
        }
        throw new Error(`Service ${serviceType} is not enabled or supported.`);
    }
}
