export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    class EnumBase<Name extends string> {
      readonly name: Name;
      readonly value: number;

      equals(other: any): boolean;
      hashCode(): number;
    }
  }
}
