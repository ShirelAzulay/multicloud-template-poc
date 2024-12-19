import { Injectable } from '@nestjs/common';

import loadConfig from '../config/config-loader';
import { AwsS3Service } from './aws/aws.s3.service';
import { GcpPubSubService } from './gcp/gcp.pubsub.service';
import { AzureBlobService } from './azure/azure.blob.service';

@Injectable()
export class MultiCloudService {
    private config = loadConfig('path/to/config.yaml'); // Load the configuration file

    // Dependency Injection: Injecting the services through the constructor
    constructor(
        private readonly awsS3Service: AwsS3Service, // Inject AwsS3Service
        private readonly gcpPubSubService: GcpPubSubService, // Inject GcpPubSubService
        private readonly azureBlobService: AzureBlobService, // Inject AzureBlobService
    ) {}

    // Method to retrieve the correct service based on the service type
    getService(serviceType: string): any {
        const activeClouds = this.config.activeClouds; // Retrieve the active clouds from config
        if (serviceType === 'storage' && this.config.services.storage) { // Check if the service is 'storage'
            if (activeClouds.includes('aws')) {
                return this.awsS3Service; // Return the AwsS3Service if AWS is active
            } else if (activeClouds.includes('gcp')) {
                return this.gcpPubSubService; // Return the GcpPubSubService if GCP is active
            } else if (activeClouds.includes('azure')) {
                return this.azureBlobService; // Return the AzureBlobService if Azure is active
            }
        }
        throw new Error(`Service ${serviceType} is not enabled or supported.`); // Error if service is not enabled
    }
}
