import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";
import "./Admin";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface RegistryPrx extends Ice.ObjectPrx {
      createAdminSession(
        userId: string, password: string,
      ): Ice.Promise<IceGrid.AdminSessionPrx>;
    }
    export const RegistryPrx: Ice.ObjectPrxStatic<RegistryPrx>;
  }
}
