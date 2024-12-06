
import { Injectable } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';

@Injectable()
export class GcpFirestoreService {
    private firestore = new Firestore();

    async addDocument(collection: string, document: any): Promise<void> {
        const docRef = this.firestore.collection(collection).doc();
        await docRef.set(document);
    }
}

// Usage Example:
// const firestoreService = new GcpFirestoreService();
// firestoreService.addDocument('my-collection', { key: 'value' });
