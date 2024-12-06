
# Project Template: Cloud and AI Services Integration

This template project is designed for integrating cloud services and AI capabilities across AWS, GCP, and Azure. It is suitable for both POC and scalable microservices.

---

## **Directory Structure**

```
project-template/
├── .env                            # Environment variables for sensitive information
├── README.md                       # Project documentation
├── config/                         # Centralized configuration for all environments
│   ├── api_keys.yaml               # API keys for services (ignored in Git)
│   ├── default.yaml                # Default configuration for all environments
│   ├── development.yaml            # Development-specific configurations
│   ├── main-config.yaml            # Defines active clouds and enabled services
│   └── production.yaml             # Production-specific configurations
├── package.json                    # NPM dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── src/                            # Main source code
│   ├── app.module.ts               # Root module that imports all other modules
│   ├── main.ts                     # Entry point of the application
│   ├── cloud/                      # Cloud services integration
│   │   ├── aws/                    # AWS-specific integrations
│   │   │   ├── aws.s3.service.ts   # AWS S3 storage service
│   │   │   ├── aws.lambda.service.ts # AWS Lambda service
│   │   │   ├── aws.dynamodb.service.ts # AWS DynamoDB service
│   │   │   ├── aws.sns.service.ts  # AWS SNS service
│   │   │   ├── aws.sqs.service.ts  # AWS SQS service
│   │   │   ├── aws.cloudwatch.service.ts # AWS CloudWatch
│   │   │   ├── aws.stepfunctions.service.ts # AWS Step Functions
│   │   │   ├── aws.kms.service.ts  # AWS KMS
│   │   │   ├── aws.secretsmanager.service.ts # AWS Secrets Manager
│   │   │   └── aws.utils.ts        # AWS utility functions
│   │   ├── gcp/                    # GCP-specific integrations
│   │   │   ├── gcp.storage.service.ts # GCP Storage service
│   │   │   ├── gcp.firestore.service.ts # GCP Firestore service
│   │   │   ├── gcp.functions.service.ts # GCP Functions service
│   │   │   ├── gcp.pubsub.service.ts # GCP Pub/Sub service
│   │   │   ├── gcp.bigquery.service.ts # GCP BigQuery
│   │   │   ├── gcp.logging.service.ts # GCP Logging
│   │   │   ├── gcp.dataflow.service.ts # GCP Dataflow
│   │   │   ├── gcp.kms.service.ts  # GCP KMS
│   │   │   ├── gcp.cloudsql.service.ts # GCP Cloud SQL
│   │   │   └── gcp.secretmanager.service.ts # GCP Secret Manager
│   │   ├── azure/                  # Azure-specific integrations
│   │       ├── azure.blob.service.ts # Azure Blob Storage
│   │       ├── azure.functions.service.ts # Azure Functions
│   │       ├── azure.cosmosdb.service.ts # Azure Cosmos DB
│   │       ├── azure.eventgrid.service.ts # Azure Event Grid
│   │       ├── azure.servicebus.service.ts # Azure Service Bus
│   │       ├── azure.keyvault.service.ts  # Azure Key Vault
│   │       ├── azure.monitor.service.ts   # Azure Monitor
│   │       ├── azure.loganalytics.service.ts # Azure Log Analytics
│   │       ├── azure.datafactory.service.ts # Azure Data Factory
│   │       └── azure.tablestorage.service.ts # Azure Table Storage
│   ├── config/                     # Configuration helpers
│   │   ├── config-loader.ts        # Dynamically loads configurations based on environment
│   │   ├── app.config.ts           # Application-wide configurations
│   │   ├── aws.config.ts           # AWS-specific configurations
│   │   ├── azure.config.ts         # Azure-specific configurations
│   │   ├── gcp.config.ts           # GCP-specific configurations
│   │   └── env.ts                  # Helper to load environment variables with defaults
│   ├── database/                   # Database integration
│   │   ├── database.service.ts     # Database connection management
│   │   ├── models/                 # Entity models
│   │   │   ├── user.entity.ts      # User entity
│   │   │   └── project.entity.ts   # Project entity
│   │   └── utils/                  # Query helpers
│   │       └── query-builder.ts    # Helper for building dynamic queries
│   ├── genai/                      # AI/GenAI integration
│   │   ├── genai.service.ts        # Service for AI operations
│   │   └── utils/                  # Prompt building and response parsing
│   │       ├── prompt-builder.ts   # Helper for creating dynamic prompts
│   │       └── response-parser.ts  # Helper for parsing AI model responses
│   ├── shared/                     # Shared utilities
│   │   ├── logger.service.ts       # Logging utility
│   │   ├── exceptions/             # Exception handling
│   │   │   ├── http-exception.filter.ts
│   │   │   └── custom-exception.ts
│   │   └── types/                  # Shared types for cloud and AI
│   ├── users/                      # User management module
│       ├── users.controller.ts     # User-related APIs
│       ├── users.service.ts        # User-related logic
│       └── dto/                    # Data Transfer Objects
│           ├── create-user.dto.ts  # DTO for creating a user
│           └── update-user.dto.ts  # DTO for updating a user
```

---

## **How to Use**

### **Dynamic Configurations**
The application loads configurations dynamically from the `main-config.yaml` file. Update it to enable/disable services or clouds.

---

## **Examples for Each Cloud Service**
### AWS
- S3 File Upload: `aws.s3.service.ts`
- DynamoDB Add Item: `aws.dynamodb.service.ts`
...

### GCP
- Firestore Add Document: `gcp.firestore.service.ts`
...

### Azure
- Blob Storage Upload: `azure.blob.service.ts`
...

Refer to each service file for detailed examples and usage.

---

## **Environment Variables**
Ensure the following variables are set in `.env`:
```plaintext
AWS_REGION=us-east-1
AWS_ACCESS_KEY=your-access-key
AWS_SECRET_KEY=your-secret-key
GCP_PROJECT_ID=your-project-id
AZURE_STORAGE_CONNECTION_STRING=your-connection-string
```

---

## **Installation**
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm run start:dev
   ```

---

## **Feedback**
Let me know if additional details or changes are needed!
