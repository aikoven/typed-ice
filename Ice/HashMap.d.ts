import './Ice';

declare module './Ice' {
  namespace Ice {
    interface HashMapEntry<K, V> {
      key: K;
      value: V;
      next: HashMapEntry<K, V> | null;
    }

    export class HashMap<K, V> {
      constructor();
      constructor(from: HashMap<K, V>);

      readonly size: number;
      readonly entries: HashMapEntry<K, V> | null;

      forEach(fn: (key: K, value: V) => void, obj?: any): void;
      keys(): K[];

      get(key: K): V | undefined;
      set(key: K, value: V): void;
      has(key: K): boolean;
      clone(): HashMap<K, V>;
      merge(from: HashMap<K, V>): void;
    }
  }
}
