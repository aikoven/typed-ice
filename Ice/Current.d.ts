import './Ice';

declare module './Ice' {
  namespace Ice {
    export type Context = Ice.HashMap<string, string>;

    export interface Current extends Ice.Struct {
      adapter: Ice.ObjectAdapter;
      con: Ice.Connection;
      id: Ice.Identity;
      facet: string;
      operation: string;
      ctx: Ice.HashMap<string, string>;
      requestId: number;
    }
  }
}
