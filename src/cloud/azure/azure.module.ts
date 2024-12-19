import { Module } from '@nestjs/common';
import { AzureBlobService } from './azure.blob.service';
import { AzureEventGridService } from './azure.eventgrid.service';
import { AzureCosmosDbService } from './azure.cosmosdb.service';
import { AzureKeyVaultService } from './azure.keyvault.service';
import { AzureMonitorService } from './azure.monitor.service';
import { AzureFunctionsService } from './azure.functions.service';

@Module({
    providers: [
        AzureBlobService,
        AzureEventGridService,
        AzureCosmosDbService,
        AzureKeyVaultService,
        AzureMonitorService,
        AzureFunctionsService,
    ],
    exports: [
        AzureBlobService,
        AzureEventGridService,
        AzureCosmosDbService,
        AzureKeyVaultService,
        AzureMonitorService,
        AzureFunctionsService,
    ],
})
export class AzureModule {}
