import {Ice} from '../Ice/Ice';
import {Glacier2} from './Glacier2';

declare module './Glacier2' {
  namespace Glacier2 {
    export interface RouterPrx extends Ice.RouterPrx {
      createSession(userId: string, password: string,
                    context?: Ice.Context):
        Ice.Promise<Glacier2.SessionPrx>;
      destroySession(): Ice.Promise<void>;
      getACMTimeout(): Ice.Promise<number>;
      getCategoryForClient(): Ice.Promise<string>;
    }

    export const RouterPrx: Ice.ObjectPrxStatic<RouterPrx>;
  }
}
