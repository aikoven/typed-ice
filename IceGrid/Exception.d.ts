import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export class ObjectExistsException extends Ice.UserException {
      id: Ice.Identity;
    }
  }
}
