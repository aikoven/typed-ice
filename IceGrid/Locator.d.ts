import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";
import "./Registry";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface LocatorPrx extends Ice.LocatorPrx {
      getLocalRegistry(): Ice.Promise<IceGrid.RegistryPrx>;
    }
    export const LocatorPrx: Ice.ObjectPrxStatic<LocatorPrx>;
  }
}
