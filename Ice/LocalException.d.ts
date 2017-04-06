import './Ice';

declare module './Ice' {
  namespace Ice {
    export class RequestFailedException extends Ice.LocalException {
      id: Ice.Identity;
      facet: string;
      operation: string;

      constructor(id?: Ice.Identity, facet?: string, operation?: string,
                  cause?: any);
    }

    export class ObjectNotExistException extends RequestFailedException {}

    export class FacetNotExistException extends RequestFailedException {}

    export class OperationNotExistException extends RequestFailedException {}


    export class SyscallException extends Ice.LocalException {
      error: number;

      constructor(error?: number, cause?: any);
    }

    export class SocketException extends SyscallException {}

    export class ConnectFailedException extends SocketException {}

    export class ConnectionRefusedException extends ConnectFailedException {}

    export class ConnectionLostException extends SocketException {}


  }
}
