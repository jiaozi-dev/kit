/**
 * @example
 * ```typescript
    const STATUS = Enum({
        Success: "success",
        Warning: "warning",
        Error: "error",
    });
    type STATUS = Enum<typeof STATUS>;
    ```
 */
export function Enum<const T extends object>(object: T): Readonly<T> {
    return Object.freeze(object);
}

export type Enum<T extends object> = T[keyof T];
