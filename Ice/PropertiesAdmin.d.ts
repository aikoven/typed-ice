import './Ice';

declare module './Ice' {
  namespace Ice {
    export type PropertyDict = Ice.HashMap<string, string>;
  }
}

