import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class Exception extends Error {
      constructor(cause?: any);

      ice_cause: any;
      
      ice_name(): string;
    }

    export class LocalException extends Exception {}
    
    export class UserException extends Exception {}
  }
}
