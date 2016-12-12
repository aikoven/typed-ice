import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export function generateUUID(): string;
  }
}
