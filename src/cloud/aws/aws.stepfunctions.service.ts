import { Injectable } from '@nestjs/common';
import { StepFunctions } from 'aws-sdk';

@Injectable()
export class AwsStepFunctionsService {
    private stepFunctions: StepFunctions;

    constructor() {
        this.stepFunctions = new StepFunctions();
    }

    // List state machines
    async listStateMachines(): Promise<string[]> {
        const result = await this.stepFunctions.listStateMachines().promise();
        return result.stateMachines?.map(machine => machine.name || '') || [];
    }

    // Start execution of a state machine
    async startExecution(stateMachineArn: string, input: Record<string, unknown>): Promise<StepFunctions.StartExecutionOutput> {
        return this.stepFunctions.startExecution({
            stateMachineArn,
            input: JSON.stringify(input),
        }).promise();
    }
}
