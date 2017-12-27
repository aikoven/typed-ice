export {Ice} from './Ice.ns';

declare class IcePromise<T> extends Promise<T> {
  static delay(ms: number): IcePromise<void>;
  static delay<T>(ms: number, value: T): IcePromise<T>;
  static try<T>(cb: () => T | PromiseLike<T>): IcePromise<T>;

  constructor(
    executor?: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  );

  resolve(value?: T | PromiseLike<T>): void;
  reject(reason?: any): void;

  finally(cb: () => void | PromiseLike<void>): IcePromise<T>;
  delay(ms: number): IcePromise<T>;
}

declare module './Ice.ns' {
  namespace Ice {
    export {IcePromise as Promise};
  }
}
