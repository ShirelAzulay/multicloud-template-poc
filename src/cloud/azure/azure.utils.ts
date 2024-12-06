
export function validateAzureRegion(region: string): boolean {
    return ['eastus', 'westus'].includes(region);
}
