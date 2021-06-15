/// <reference types="node" />
import { EventEmitter } from 'events';
import { Strategy, StrategyTransportInterface } from './strategy';
import { FeatureInterface } from './feature';
import { RepositoryInterface } from './repository';
import { Variant } from './variant';
import { Context } from './context';
export default class UnleashClient extends EventEmitter {
    private repository;
    private strategies;
    private warned;
    constructor(repository: RepositoryInterface, strategies: Strategy[]);
    private getStrategy;
    warnOnce(missingStrategy: string, name: string, strategies: StrategyTransportInterface[]): void;
    isEnabled(name: string, context: Context, fallback: Function): boolean;
    isFeatureEnabled(feature: FeatureInterface, context: Context, fallback: Function): boolean;
    getVariant(name: string, context: Context, fallbackVariant?: Variant): Variant;
}
//# sourceMappingURL=client.d.ts.map