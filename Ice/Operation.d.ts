import './Ice';

declare module './Ice' {
  namespace Ice {
    export interface UpcallVoid {
      ice_response(): void;
      ice_exception(ex: Error): void;
    }
    export interface Upcall<R> {
      ice_response(result: R): void;
      ice_exception(ex: Error): void;
    }
    export interface Upcall2<R, O1> {
      ice_response(result: R, out1: O1): void;
      ice_exception(ex: Error): void;
    }
    export interface UpcallRest {
      ice_response(...args: any[]): void;
      ice_exception(ex: Error): void;
    }
  }
}
