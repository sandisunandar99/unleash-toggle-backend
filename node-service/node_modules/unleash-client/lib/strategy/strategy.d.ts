import { Context } from '../context';
export interface StrategyTransportInterface {
    name: string;
    parameters: any;
    constraints: Constraint[];
}
export interface Constraint {
    contextName: string;
    operator: Operator;
    values: string[];
}
export declare enum Operator {
    IN,
    NOT_IN
}
export declare class Strategy {
    name: string;
    private returnValue;
    constructor(name: string, returnValue?: boolean);
    checkConstraint(constraint: Constraint, context: Context): boolean;
    checkConstraints(context: Context, constraints?: Constraint[]): boolean;
    isEnabled(parameters: any, context: Context): boolean;
    isEnabledWithConstraints(parameters: any, context: Context, constraints?: Constraint[]): boolean;
}
//# sourceMappingURL=strategy.d.ts.map