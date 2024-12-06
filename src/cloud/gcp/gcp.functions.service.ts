
import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GcpFunctionsService {
    async invokeFunction(functionUrl: string, payload: object): Promise<object> {
        const response = await google.cloudfunctions('v1').projects.locations.functions.call({
            name: functionUrl,
            requestBody: { data: JSON.stringify(payload) },
        });
        return response.data;
    }
}
