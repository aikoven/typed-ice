import {Ice} from './Ice';
import './Connection';

declare module './Ice' {
  namespace Ice {
    export interface ObjectPrxStatic<T extends ObjectPrx> {
      new(): T;

      ice_staticId(): string;

      checkedCast(proxy: ObjectPrx, facet?: string,
                  ctx?: Ice.HashMap<string, string>): Ice.Promise<T>;

      uncheckedCast(proxy: ObjectPrx, facet?: string): T;
    }
    
    export interface ObjectPrx {
      ice_ping(): Ice.Promise<void>;
      ice_getCachedConnection(): Ice.Connection;
      ice_getConnection(): Ice.Promise<Ice.Connection>;
      ice_getCommunicator(): Ice.Communicator;
      ice_getIdentity(): Ice.Identity;
      ice_context(context: Ice.HashMap<string, string>): this;
    }
    
    export const ObjectPrx: ObjectPrxStatic<ObjectPrx>;
    
  }
}
