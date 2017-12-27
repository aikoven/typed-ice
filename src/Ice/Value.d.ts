export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    class Value {
      static ice_staticId(): string;

      ice_id(): string;
    }
  }
}