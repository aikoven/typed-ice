import {Ice} from './Ice';
import './EnumBase';

declare module './Ice' {
  namespace Ice {
    export class ACMClose extends Ice.EnumBase {
      static CloseOff: ACMClose;
      static CloseOnIdle: ACMClose;
      static CloseOnInvocation: ACMClose;
      static CloseOnInvocationAndIdle: ACMClose;
      static CloseOnIdleForceful: ACMClose;
    }
    
    export class ACMHeartbeat extends Ice.EnumBase {
      static HeartbeatOff: ACMHeartbeat;
      static HeartbeatOnInvocation: ACMHeartbeat;
      static HeartbeatOnIdle: ACMHeartbeat;
      static HeartbeatAlways: ACMHeartbeat;
    }
    
    export interface ConnectionCallback {
      heartbeat(connection: Connection): void;
      closed(connection: Connection): void;
    }
    
    export interface Connection {
      close(force?: boolean): Ice.Promise<void>;

      setAdapter(adapter: Ice.ObjectAdapter): void;

      setCallback(callback: ConnectionCallback): void;
      setACM(timeout?: number, close?: ACMClose, heartbeat?: ACMHeartbeat): void;
      
      isActiveOrHolding(): boolean;
      waitUntilFinished(): Ice.Promise<void>;
    }
  }
}
