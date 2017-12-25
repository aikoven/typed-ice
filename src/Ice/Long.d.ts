export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    class Long {
      high: number;
      low: number;

      constructor(num: number);
      constructor(high: number, low: number);

      equals(rhs: Long): boolean;
      hashCode(): number;
      toNumber(): number;
    }
  }
}
