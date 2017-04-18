import './Ice';

declare module './Ice' {
  namespace Ice {
    export interface ObjectAdapter {
      getCommunicator(): Ice.Communicator;

      add(servant: Ice.Object, id: Ice.Identity): Ice.ObjectPrx;
      addFacet(servant: Ice.Object, id: Ice.Identity,
               facet: string): Ice.ObjectPrx;
      addWithUUID(servant: Ice.Object): Ice.ObjectPrx;
      addFacetWithUUID(servant: Ice.Object, facet: string): Ice.ObjectPrx;
      addDefaultServant(servant: Ice.Object, category: string): void;

      remove(id: Ice.Identity): Ice.Object;
      removeFacet(id: Ice.Identity, facet: string): Ice.Object;
      removeDefaultServant(category: string): Ice.Object;

      createProxy(id: Ice.Identity): Ice.ObjectPrx;
      createDirectProxy(id: Ice.Identity): Ice.ObjectPrx;
      createIndirectProxy(id: Ice.Identity): Ice.ObjectPrx;

      isDeactivated(): boolean;
      destroy(): Ice.Promise<void>;
    }
  }
}
