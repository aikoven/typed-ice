export {Ice} from './Ice.ns';

import './Promise';
import './Connection';
import './AsyncResultBase';
import './Identity';
import './ObjectPrx';
import './ObjectAdapterI';

declare module './Ice.ns' {
  namespace Ice {
    interface CloseCallback {
      closed(connection: Connection): void;
    }

    interface HeartbeatCallback {
      heartbeat(connection: Connection): void;
    }

    interface Connection {
      /**
       * Explicitly closes the connection using the given closure mode.
       *
       * @see https://doc.zeroc.com/display/Ice37/Using+Connections#UsingConnections-close
       */
      close(mode: ConnectionClose): AsyncResultBase<void>;
      /**
       * Creates a special proxy that only uses this connection.
       * This operation is primarily used for bidirectional connections.
       *
       * @see https://doc.zeroc.com/display/Ice37/Bidirectional+Connections
       */
      createProxy(id: Identity): ObjectPrx;
      /**
       * Associates this connection with an object adapter to enable a
       * bidirectional connection.
       *
       * @see https://doc.zeroc.com/display/Ice37/Bidirectional+Connections
       */
      setAdapter(adapter: ObjectAdapter): void;
      /**
       * Returns the object adapter associated with this connection, or nil if
       * no association has been made.
       */
      getAdapter(): ObjectAdapter | null;

      /**
       * Associates a callback with this connection that is invoked whenever the
       * connection is closed. Passing a nil value clears the current callback.
       */
      setCloseCallback(callback: CloseCallback | null): void;
      /**
       * Associates a callback with this connection that is invoked whenever the
       * connection receives a heartbeat message. Passing a nil value clears the
       * current callback.
       */
      setHeartbeatCallback(callback: HeartbeatCallback | null): void;
      /**
       * Configures Active Connection Management settings for this connection.
       *
       * @see https://doc.zeroc.com/display/Ice37/Active+Connection+Management
       */
      setACM(
        timeout?: number,
        close?: ACMClose,
        heartbeat?: ACMHeartbeat,
      ): void;
      /**
       * Returns the connection's current settings for Active Connection
       * Management.
       *
       * @see https://doc.zeroc.com/display/Ice37/Active+Connection+Management
       */
      getACM(): ACM;

      isActiveOrHolding(): boolean;
      waitUntilFinished(): Ice.Promise<void>;
    }
  }
}
