import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Promise<T> implements PromiseLike<T> {
      constructor();

      then<TResult>(
        onfulfilled?: (value: T) => TResult | PromiseLike<TResult>,
        onrejected?: (reason: any) => TResult | PromiseLike<TResult>,
      ): Promise<TResult>;
      then<TResult>(
        onfulfilled?: (value: T) => TResult | PromiseLike<TResult>,
        onrejected?: (reason: any) => void,
      ): Promise<TResult>;

      exception(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;
      exception(onrejected?: (reason: any) => void): Promise<T>;
    }
  }
}
