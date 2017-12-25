export {Ice} from './Ice.ns';

import './AsyncResultBase';

declare module './Ice.ns' {
  namespace Ice {
    class AsyncResult<T> extends AsyncResultBase<T> {
      cancel(): void;
      isCompleted(): boolean;
      isSent(): boolean;
      throwLocalException(): void;
      sentSynchronously(): boolean;
    }
  }
}