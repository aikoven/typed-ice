import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class Struct {
      clone(): this;
      equals(obj: any): boolean;
    } 
  }
}
