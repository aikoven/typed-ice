import './Ice';
import './Connection';

declare module './Ice' {
  namespace Ice {
    export interface ObjectPrxStatic<T extends ObjectPrx> {
      new(): T;

      ice_staticId(): string;

      checkedCast(proxy: ObjectPrx, facet?: string,
                  ctx?: Ice.HashMap<string, string>): Ice.Promise<T>;
      checkedCast(proxy: null | undefined, facet?: string,
                  ctx?: Ice.HashMap<string, string>): Ice.Promise<null>;
      checkedCast(proxy: ObjectPrx | null | undefined, facet?: string,
                  ctx?: Ice.HashMap<string, string>): Ice.Promise<T | null>;

      uncheckedCast(proxy: ObjectPrx, facet?: string): T;
      uncheckedCast(proxy: null | undefined, facet?: string): null;
      uncheckedCast(proxy: ObjectPrx | null | undefined,
                    facet?: string): T | null;
    }

    export interface ObjectPrx {
      ice_ping(): Ice.Promise<void>;
      ice_getCachedConnection(): Ice.Connection;
      ice_getConnection(): Ice.Promise<Ice.Connection>;
      ice_getCommunicator(): Ice.Communicator;
      ice_getIdentity(): Ice.Identity;
      ice_context(context: Ice.Context): this;
      ice_getContext(): Ice.Context;

      ice_batchOneway(): this;
      ice_flushBatchRequests(): Ice.Promise<void>;

      ice_invocationTimeout(ms: number): this;
    }

    export const ObjectPrx: ObjectPrxStatic<ObjectPrx>;

  }
}
