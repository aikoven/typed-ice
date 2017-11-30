import {Ice} from "../Ice/Ice";
import {IceGrid} from "./IceGrid";
import "./Admin";

export {IceGrid}

declare module "./IceGrid" {
  namespace IceGrid {
    export interface QueryPrx extends Ice.ObjectPrx {
      findObjectById(id: Ice.Identity): Ice.Promise<Ice.ObjectPrx | null>;
      findObjectByType(type: string): Ice.Promise<Ice.ObjectPrx | null>;
      /**
       * todo: implements IceGrid.LoadSample
       * findObjectByTypeOnLeastLoadedNode(
       *    type: string, sample: IceGrid.LoadSample): Ice.ObjectPrx | null;
       * */
      findAllObjectsByType(type: string): Ice.Promise<Ice.ObjectPrx[]>;
      findAllReplicas(proxy: Ice.ObjectPrx): Ice.Promise<Ice.ObjectPrx[]>;
    }
    export const QueryPrx: Ice.ObjectPrxStatic<QueryPrx>;
  }
}
