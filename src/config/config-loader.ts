import * as yaml from 'js-yaml';
import * as fs from 'fs';

export default function loadConfig(fileName: string): any {
    try {
        const fileContent = fs.readFileSync(fileName, 'utf8');
        return yaml.load(fileContent);
    } catch (err) {
        throw new Error(`Failed to load configuration file: ${fileName}`);
    }
}
// Compare this snippet from src/config/config-loader.ts: