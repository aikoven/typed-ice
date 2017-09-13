import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Communicator {
      destroy(): Ice.Promise<void>;
      shutdown(): void;
      waitForShutdown(): Ice.Promise<void>;
      isShutdown(): boolean;

      stringToProxy(str: string): Ice.ObjectPrx;
      proxyToString(proxy: Ice.ObjectPrx | null): string;
      propertyToProxy(property: string): Ice.ObjectPrx | null;
      proxyToProperty(proxy: Ice.ObjectPrx, property: string): Ice.PropertyDict;
      stringToIdentity(str: string): Ice.Identity;
      identityToString(identity: Ice.Identity): string;

      createObjectAdapter(name: string): Ice.Promise<Ice.ObjectAdapter>;
      createObjectAdapterWithEndpoints(
        name: string, endpoints: string,
      ): Ice.Promise<Ice.ObjectAdapter>;
      createObjectAdapterWithRouter(
        name: string, router: Ice.RouterPrx,
      ): Ice.Promise<Ice.ObjectAdapter>;
      getProperties(): Ice.Properties;
      getDefaultRouter(): Ice.RouterPrx;
      setDefaultRouter(router: Ice.RouterPrx): void;

      getDefaultLocator(): Ice.LocatorPrx | null;
      setDefaultLocator(locator: Ice.LocatorPrx | null): void;
    }
  }
}
