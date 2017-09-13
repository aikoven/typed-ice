import {Ice} from '../Ice/Ice';

declare module './Glacier2' {
  namespace Glacier2 {
    export class SessionNotExistException extends Ice.UserException {}

    export interface RouterPrx extends Ice.RouterPrx {
      getCategoryForClient(context?: Ice.Context): Ice.Promise<string>;
      createSession(userId: string, password: string,
                    context?: Ice.Context): Ice.Promise<Glacier2.SessionPrx>;
      refreshSession(context?: Ice.Context): Ice.Promise<void>;
      destroySession(context?: Ice.Context): Ice.Promise<void>;
      getSessionTimeout(context?: Ice.Context): Ice.Promise<Ice.Long>;
      getACMTimeout(context?: Ice.Context): Ice.Promise<number>;
    }
    export const RouterPrx: Ice.ObjectPrxStatic<RouterPrx>;
  }
}
