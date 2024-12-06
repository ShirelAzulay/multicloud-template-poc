
export function validateAwsRegion(region: string): boolean {
    return ['us-east-1', 'us-west-2'].includes(region);
}
