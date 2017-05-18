import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Long {
      high: number;
      low: number;

      constructor(high: number, low: number);
      
      toNumber(): number;
      equals(rhs: any): boolean;
    }
  }
}
