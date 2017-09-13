import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Router extends Ice.Object {
      
    }

    export interface RouterPrx extends Ice.ObjectPrx {

    }

    export const RouterPrx: Ice.ObjectPrxStatic<RouterPrx>;
  }
}
