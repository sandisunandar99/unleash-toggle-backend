/// <reference types="node" />
import { EventEmitter } from 'events';
export interface StorageOptions {
    backupPath: string;
    appName: string;
}
export declare class Storage extends EventEmitter implements EventEmitter {
    private ready;
    private data;
    private path;
    constructor({ backupPath, appName }: StorageOptions);
    safeAppName(appName?: string): string;
    reset(data: any, doPersist?: boolean): void;
    get(key: string): any;
    getAll(): any;
    persist(): void;
    load(): void;
}
//# sourceMappingURL=storage.d.ts.map