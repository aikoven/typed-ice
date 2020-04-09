export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    interface ValueConstructor<T extends Value> {
      new (...args: any[]): T;
      ice_staticId(): string;
    }

    class Value {
      static ice_staticId(): string;

      ice_id(): string;
    }
  }
}
