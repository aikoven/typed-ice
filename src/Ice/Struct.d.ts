export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    interface Struct {
      clone(): this;
      equals(other: this): boolean;
    }
  }
}
