import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Struct {
      clone(): this;
      equals(obj: any): boolean;
    } 
  }
}
