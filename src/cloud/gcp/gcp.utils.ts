
export function validateGcpRegion(region: string): boolean {
    return ['us-central1', 'europe-west1'].includes(region);
}
