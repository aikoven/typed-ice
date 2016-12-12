import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class ConnectFailedException extends Ice.LocalException {}
  }
}
