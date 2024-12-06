
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import {Injectable} from "@nestjs/common";

@Injectable()
export class AzureKeyVaultService {
    private keyVaultUrl = process.env.AZURE_KEY_VAULT_URL || '';
    private secretClient = new SecretClient(this.keyVaultUrl, new DefaultAzureCredential());

    async getSecret(secretName: string): Promise<string | undefined> {
        const secret = await this.secretClient.getSecret(secretName);
        return secret.value;
    }
}
