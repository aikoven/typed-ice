import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Exception extends Error {
      constructor(cause?: any);

      ice_cause: any;
      
      ice_name(): string;
    }

    export class LocalException extends Exception {}
    
    export class UserException extends Exception {}

    export class RequestFailedException extends Exception {
      id: Ice.Identity;
      facet: string;
      operation: string;
    }

    export class ObjectNotExistException extends RequestFailedException {}
  }
}
