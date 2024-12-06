
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenAIService {
    async summarizeText(text: string): Promise<string> {
        return `Summary of: ${text}`;
    }
}

// Usage Example:
// const genaiService = new GenAIService();
// const summary = genaiService.summarizeText('This is a test');
// console.log(summary);
