
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    connect() {
        console.log('Connecting to database...');
    }
}

// Usage Example:
// const dbService = new DatabaseService();
// dbService.connect();
