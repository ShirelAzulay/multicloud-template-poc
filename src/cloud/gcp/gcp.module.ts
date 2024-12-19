import { Module } from '@nestjs/common';
import { GcpFirestoreService } from './gcp.firestore.service';
import { GcpPubSubService } from './gcp.pubsub.service';
import { GcpFunctionsService } from './gcp.functions.service';
import { GcpLoggingService } from './gcp.logging.service';
import { GcpBigQueryService } from './gcp.bigquery.service';

@Module({
    providers: [
        GcpFirestoreService,
        GcpPubSubService,
        GcpFunctionsService,
        GcpLoggingService,
        GcpBigQueryService,
    ],
    exports: [
        GcpFirestoreService,
        GcpPubSubService,
        GcpFunctionsService,
        GcpLoggingService,
        GcpBigQueryService,
    ],
})
export class GcpModule {}
