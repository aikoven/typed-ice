import './Ice';

declare module './Ice' {
  namespace Ice {
    export class EnumBase {
      name: string;
      value: number;
      
      constructor(name: string, value: number);
      
      equals(other: any): boolean;
      hashCode(): number;
    }
  }
}
