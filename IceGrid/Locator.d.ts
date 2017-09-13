import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";
import "./Registry";
import "./Query";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface LocatorPrx extends Ice.LocatorPrx {
      getLocalRegistry(): Ice.Promise<IceGrid.RegistryPrx>;
      getLocalQuery(): Ice.Promise<IceGrid.QueryPrx>;
    }
    export const LocatorPrx: Ice.ObjectPrxStatic<LocatorPrx>;
  }
}
