export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    type HashMapKey =
      | null
      | number
      | string
      | boolean
      | {hashCode(): number};

    class HashMap<K extends HashMapKey, V> {
      constructor();
      constructor(from: HashMap<K, V>);
      constructor(
        keyComparator: (k1: K, k2: K) => boolean,
        valueComparator?: (v1: V, v2: V) => boolean,
      );

      readonly size: number;

      set(key: K, value: V): void;
      get(key: K): V | undefined;
      has(key: K): boolean;
      delete(key: K): V | undefined;
      clear(): void;

      forEach(fn: (value: V, key: K) => void): void;
      forEach<C>(fn: (this: C, value: V, key: K) => void, context: C): void;

      entries(): IterableIterator<[K, V]>;
      keys(): IterableIterator<K>;
      values(): IterableIterator<V>;

      equals(
        other: HashMap<K, V>,
        valueComparator?: (v1: V, v2: V) => boolean,
      ): boolean;
      merge(from: HashMap<K, V>): void;
    }
  }
}
