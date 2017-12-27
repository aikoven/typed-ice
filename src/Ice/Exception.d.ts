export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    class ServantError {
      cause: any;
    }

    class Exception {
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
