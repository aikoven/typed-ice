import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class Communicator {
      destroy(): Ice.Promise<void>;

      stringToProxy(str: string): Ice.ObjectPrx;
      propertyToProxy(property: string): Ice.ObjectPrx | null;
      stringToIdentity(str: string): Ice.Identity;

      createObjectAdapter(name: string): Ice.Promise<Ice.ObjectAdapter>;
      createObjectAdapterWithRouter(name: string, router: Ice.RouterPrx): Ice.Promise<Ice.ObjectAdapter>;
      getProperties(): Ice.Properties;
      getDefaultRouter(): Ice.RouterPrx;
    }
  }
}
