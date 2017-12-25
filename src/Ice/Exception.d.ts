export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    class ServantError extends Error {
      cause: any;
    }

    class Exception extends Error {
      constructor(cause?: any);

      ice_cause?: any;

      ice_name(): string;
      ice_id(): string;
    }

    class LocalException extends Exception {}

    class UserException extends Exception {
      // ice_getSlicedData(): ? | null;
    }
  }
}
