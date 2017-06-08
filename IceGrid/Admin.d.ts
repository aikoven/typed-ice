import {Ice} from "../Ice/Ice";
import {Glacier2} from "../Glacier2/Session";
import {IceGrid} from "./IceGrid";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface AdminPrx extends Ice.ObjectPrx {
      addObjectWithType(object: Ice.ObjectPrx, type: string): Ice.Promise<void>;
    }
    export const AdminPrx: Ice.ObjectPrxStatic<AdminPrx>;

    export interface AdminSessionPrx extends Glacier2.SessionPrx {
      getAdmin(): Ice.Promise<AdminPrx>;
    }
    export const AdminSessionPrx: Ice.ObjectPrxStatic<AdminSessionPrx>;
  }
}
