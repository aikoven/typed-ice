import {Ice} from '../Ice/Ice';

declare module './Glacier2' {
  namespace Glacier2 {
    export class PermissionDeniedException extends Ice.UserException {
      reason: string;
    }

    export class PermissionsVerifier extends Ice.Object {
    }
  }
}
