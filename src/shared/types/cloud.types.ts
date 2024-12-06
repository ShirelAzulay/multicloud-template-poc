
export interface CloudServiceConfig {
    provider: 'aws' | 'gcp' | 'azure';
    enabled: boolean;
    options?: Record<string, any>;
}
