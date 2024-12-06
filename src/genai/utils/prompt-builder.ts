
export function buildPrompt(data: any): string {
    return `This is a generated prompt based on: ${JSON.stringify(data)}`;
}
