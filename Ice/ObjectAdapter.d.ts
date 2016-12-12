import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export interface ObjectAdapter {
      getCommunicator(): Ice.Communicator;
      add(servant: Ice.Object, id: Ice.Identity): Ice.ObjectPrx;
      remove(id: Ice.Identity): Ice.Object;
      destroy(): Ice.Promise<void>;
    }
  }
}
