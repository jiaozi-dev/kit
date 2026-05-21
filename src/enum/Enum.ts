//
type EnumKey = string;
type EnumValue = string | number | boolean | object | null | symbol | bigint;
type EnumObject = Record<EnumKey, EnumValue>;

//
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;
type UnionToTuple<T, L = LastOf<T>> = [T] extends [never] ? [] : [...UnionToTuple<Exclude<T, L>>, L];

//
type EntriesToTuple<T extends EnumObject, U extends keyof T = keyof T> = [U] extends [never]
    ? []
    : LastOf<U> extends infer L extends keyof T
      ? [...EntriesToTuple<T, Exclude<U, L>>, readonly [L, T[L]]]
      : [];

//
export function Enum<const T extends EnumObject>(enumObject: T): Readonly<T> {
    return Object.freeze(enumObject);
}

export type Enum<T extends EnumObject> = T[keyof T];

//
export function getEnumKeys<const T extends EnumObject>(enumObject: T): Readonly<UnionToTuple<keyof T>> {
    return Object.freeze(Object.keys(enumObject)) as unknown as Readonly<UnionToTuple<keyof T>>;
}

export function getEnumValues<const T extends EnumObject>(enumObject: T): Readonly<UnionToTuple<T[keyof T]>> {
    return Object.freeze(Object.values(enumObject)) as unknown as Readonly<UnionToTuple<T[keyof T]>>;
}

export function getEnumEntries<const T extends EnumObject>(enumObject: T): Readonly<EntriesToTuple<T>> {
    return Object.freeze(Object.entries(enumObject)) as unknown as Readonly<EntriesToTuple<T>>;
}

//
export function hasEnumKey<const T extends EnumObject, const K extends EnumKey>(
    enumObject: T,
    key: K
): key is K & keyof T {
    return key in enumObject;
}

export function getEnumValue<const T extends EnumObject, K extends keyof T>(enumObject: T, key: K): T[K] {
    return enumObject[key];
}
