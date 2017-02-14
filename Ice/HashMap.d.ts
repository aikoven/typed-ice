import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class HashMap<K, V> {
      constructor();
      constructor(from: HashMap<K, V>);

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
