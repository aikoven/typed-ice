export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    interface ILogger {
      print(message: string): void;
      trace(category: string, message: string): void;
      warning(message: string): void;
      error(message: string): void;
    }

    class Logger implements ILogger {
      constructor(prefix?: string);

      print(message: string): void;
      trace(category: string, message: string): void;
      warning(message: string): void;
      error(message: string): void;
      cloneWithPrefix(prefix: string): Logger;
    }
  }
}
