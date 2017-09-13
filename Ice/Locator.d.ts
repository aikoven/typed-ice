import './Ice';

declare module './Ice' {
  namespace Ice {
    export class AdapterNotFoundException extends Ice.Exception {}
    export class InvalidReplicaGroupIdException extends Ice.Exception {}
    export class AdapterAlreadyActiveException extends Ice.Exception {}
    export class ObjectNotFoundException extends Ice.Exception {}
    export class ServerNotFoundException extends Ice.Exception {}

    export interface LocatorPrx extends Ice.ObjectPrx {
      findObjectById(id: Ice.Identity): Ice.Promise<Ice.ObjectPrx | null>;
      findAdapterById(id: string): Ice.Promise<Ice.ObjectPrx | null>;
      getRegistry(): Ice.Promise<LocatorRegistryPrx>;
    }
    export const LocatorPrx: Ice.ObjectPrxStatic<LocatorPrx>;

    export interface LocatorRegistryPrx extends Ice.ObjectPrx {
      setAdapterDirectProxy(
        id: string,
        proxy: Ice.ObjectPrx | null,
      ): Ice.Promise<void>;
      
      setReplicatedAdapterDirectProxy(
        adapterId: string, replicaGroupId: string,
        p: Ice.ObjectPrx | null,
      ): Ice.Promise<void>;
    }
    export const LocatorRegistryPrx: Ice.ObjectPrxStatic<LocatorRegistryPrx>;
  }
}
