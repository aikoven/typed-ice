import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";
import "./Admin";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface QueryPrx extends Ice.ObjectPrx {
      findObjectById(id: Ice.Identity): Ice.ObjectPrx | null;
      findObjectByType(type: string): Ice.ObjectPrx | null;
      /**
       * todo: implements IceGrid.LoadSample
       * findObjectByTypeOnLeastLoadedNode(
       *    type: string, sample: IceGrid.LoadSample): Ice.ObjectPrx | null;
       * */
      findAllObjectsByType(type: string): Ice.ObjectPrx[];
      findAllReplicas(proxy: Ice.ObjectPrx): Ice.ObjectPrx[];
    }
    export const QueryPrx: Ice.ObjectPrxStatic<QueryPrx>;
  }
}
