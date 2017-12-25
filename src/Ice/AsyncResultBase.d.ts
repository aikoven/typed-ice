export {Ice} from './Ice.ns';

import './Promise';
import './Communicator';
import './ConnectionI';
import './ObjectPrx';
import './ObjectAdapterI';

declare module './Ice.ns' {
  namespace Ice {
    class AsyncResultBase<T> extends Ice.Promise<T> {
      constructor(
        communicator: Communicator | null,
        op: string,
        connection: Connection | null,
        proxy: ObjectPrx | null,
        adapter: ObjectAdapter | null,
      );

      readonly communicator: Communicator | null;
      readonly operation: string;
      readonly connection: Connection | null;
      readonly proxy: ObjectPrx | null;
      readonly adapter: ObjectAdapter | null;
    }
  }
}
