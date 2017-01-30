import {Ice} from '../Ice/Ice';

declare module './Glacier2' {
  namespace Glacier2 {
    export class PermissionDeniedException extends Ice.UserException {
      reason: string;

      constructor(reason?: string, cause?: any);
    }

    export class PermissionsVerifier extends Ice.Object {
    }
  }
}
