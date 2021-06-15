import { Context } from './context';
export declare type FallbackFunction = (name: string, context: Context) => boolean;
export declare function createFallbackFunction(name: string, context: Context, fallback?: FallbackFunction | boolean): Function;
export declare function resolveContextValue(context: Context, field: string): string | number | import("./context").Properties | undefined;
//# sourceMappingURL=helpers.d.ts.map