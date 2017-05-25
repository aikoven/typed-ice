import './Ice';

declare module './Ice' {
  namespace Ice {
    export interface ObjectAdapter {
      getName(): string;
      getCommunicator(): Ice.Communicator;

      activate(): void;
      hold(): void;
      waitForHold(): Ice.Promise<void>;
      deactivate(): Ice.Promise<void>;
      waitForDeactivate(): Ice.Promise<void>;
      isDeactivated(): boolean;
      destroy(): Ice.Promise<void>;

      add(servant: Ice.Object, id: Ice.Identity): Ice.ObjectPrx;
      addFacet(servant: Ice.Object, id: Ice.Identity,
               facet: string): Ice.ObjectPrx;
      addWithUUID(servant: Ice.Object): Ice.ObjectPrx;
      addFacetWithUUID(servant: Ice.Object, facet: string): Ice.ObjectPrx;
      addDefaultServant(servant: Ice.Object, category: string): void;

      remove(id: Ice.Identity): Ice.Object;
      removeFacet(id: Ice.Identity, facet: string): Ice.Object;
      removeDefaultServant(category: string): Ice.Object;

      find<T extends Ice.Object>(id: Ice.Identity): T | null;
      findFacet<T extends Ice.Object>(id: Ice.Identity,
                                      facet: string): T | null;
      findDefaultServant<T extends Ice.Object>(category: string): T | null;

      createProxy(id: Ice.Identity): Ice.ObjectPrx;
      createDirectProxy(id: Ice.Identity): Ice.ObjectPrx;
      createIndirectProxy(id: Ice.Identity): Ice.ObjectPrx;


    }
  }
}
