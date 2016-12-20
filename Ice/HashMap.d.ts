import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class HashMap<K, V> {
      forEach(fn: (key: K, value: V) => void, obj?: any): void;

      get(key: K): V | undefined;
      set(key: K, value: V): void;
      has(key: K): boolean;
    }
  }
}
