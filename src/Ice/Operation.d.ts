export {Ice} from './Ice.ns';

type NativePromise<T> = Promise<T>;

declare module './Ice.ns' {
  namespace Ice {
    type OperationResult<T> = T | Promise<T>;
  }
}
