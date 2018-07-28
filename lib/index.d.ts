export interface Nested<T> {
    [key: string]: Nested<T> | T;
}
export default function keysToObject<T, U = any>(keys: U[], valueMap: T | ((k: U, i: number) => T), keyMap?: (k: U, i: number) => string, initial?: {
    [key: string]: T;
}): {
    [key: string]: T;
};
export default function keysToObject<T, U = any>(keys: U[], valueMap: T | ((k: U, i: number) => T), keyMap?: (k: U, i: number) => string | string[], initial?: Nested<T>): Nested<T>;
