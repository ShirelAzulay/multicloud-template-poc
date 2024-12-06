
import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureFunctionsService {
    async invokeFunction(functionName: string, payload: object): Promise<object> {
        console.log('Invoke Azure Function:', functionName, payload);
        // Mock response for now.
        return { result: 'Success' };
    }
}
