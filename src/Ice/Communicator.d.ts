export {Ice} from './Ice.ns';

import './Promise';
import './ObjectPrx';
import './PropertiesAdmin';
import './Identity';
import './ObjectAdapterI';
import './Router';
import './Properties';
import './Logger';
import './Locator';
import './AsyncResultBase';

declare module './Ice.ns' {
  namespace Ice {
    class Communicator {
      /**
       * This operation destroys the communicator and all its associated
       * resources, such as threads, communication endpoints, object adapters,
       * and memory resources. Once you have destroyed the communicator (and
       * therefore destroyed the run time for that communicator), you must not
       * call any other Ice operation (other than to create another
       * communicator).
       *
       * If you call destroy without calling shutdown, the call waits for all
       * executing operation invocations to complete before it returns (that is,
       * the implementation of destroy implicitly calls shutdown followed by
       * waitForShutdown). shutdown (and, therefore, destroy) deactivates all
       * object adapters that are associated with the communicator. Since
       * destroy blocks until all operation invocations complete, a servant will
       * deadlock if it invokes destroy on its own communicator while executing
       * a dispatched operation.
       *
       * On the client side, calling destroy while operations are still
       * executing causes those operations to terminate with a
       * CommunicatorDestroyedException.
       */
      destroy(): Ice.Promise<void>;
      /**
       * This operation shuts down the server side of the Ice run time:
       *
       * - Operation invocations that are in progress at the time shutdown is
       *   called are allowed to complete normally. shutdown does not wait for
       *   these operations to complete; when shutdown returns, you know that no
       *   new incoming requests will be dispatched, but operations that were
       *   already in progress at the time you called shutdown may still be
       *   running. You can wait for still-executing operations to complete by
       *   calling waitForShutdown.
       *
       * - Operation invocations that arrive after the server has called
       *   shutdown either fail with a ConnectFailedException or are
       *   transparently redirected to a new instance of the server (via
       *   IceGrid).
       *
       * - Note that shutdown initiates deactivation of all object adapters
       *   associated with the communicator, so attempts to use an adapter once
       *   shutdown has completed raise an ObjectAdapterDeactivatedException.
       */
      shutdown(): void;
      /**
       * On the server side, this operation suspends the calling thread until
       * the communicator has shut down (that is, until no more operations are
       * executing in the server). This allows you to wait until the server is
       * idle before you destroy the communicator.
       *
       * On the client side, waitForShutdown simply waits until another thread
       * has called shutdown or destroy.
       */
      waitForShutdown(): Ice.Promise<void>;
      /**
       * This operation returns true if shutdown has been invoked on the
       * communicator. A return value of true does not necessarily indicate that
       * the shutdown process has completed, only that it has been initiated.
       * An application that needs to know whether shutdown is complete can call
       * waitForShutdown. If the blocking nature of waitForShutdown is
       * undesirable, the application can invoke it from a separate thread.
       */
      isShutdown(): boolean;

      stringToProxy(str: string): ObjectPrx | null;
      proxyToString(proxy: ObjectPrx | null): string;
      propertyToProxy(property: string): ObjectPrx | null;
      proxyToProperty(proxy: ObjectPrx, prefix: string): PropertyDict;
      stringToIdentity(str: string): Identity;
      identityToString(identity: Identity): string;

      /**
       * Create a new object adapter. The endpoints for the object adapter are
       * taken from the property name.Endpoints.
       *
       * It is legal to create an object adapter with the empty string as its
       * name. Such an object adapter is accessible via bidirectional
       * connections or by collocated invocations that originate from the same
       * communicator as is used by the adapter.
       *
       * Attempts to create a named object adapter for which no configuration
       * can be found raise Ice::InitializationException.
       *
       * @see https://doc.zeroc.com/display/Ice37/Object+Adapters
       */
      createObjectAdapter(name: string): Ice.Promise<ObjectAdapter>;
      /**
       * Create a new object adapter with endpoints. This operation sets the
       * property name.Endpoints, and then calls createObjectAdapter. It is
       * provided as a convenience function.
       *
       * Calling this operation with an empty name will result in a UUID being
       * generated for the name.
       */
      createObjectAdapterWithEndpoints(
        name: string,
        endpoints: string,
      ): Ice.Promise<ObjectAdapter>;
      /**
       * createObjectAdapterWithRouter creates a routed object adapter that
       * allows clients to receive callbacks from servers that are behind a
       * router.
       *
       * Calling this operation with an empty name will result in a UUID being
       * generated for the name.
       *
       * @see https://doc.zeroc.com/display/Ice37/Object+Adapters
       * @see https://doc.zeroc.com/display/Ice37/Glacier2
       */
      createObjectAdapterWithRouter(
        name: string,
        router: RouterPrx,
      ): Ice.Promise<ObjectAdapter>;

      /**
       * Get the properties for this communicator.
       */
      getProperties(): Properties;
      /**
       * Get the logger for this communicator.
       */
      getLogger(): ILogger;

      /**
       * Get the default router this communicator.
       */
      getDefaultRouter(): RouterPrx | null;
      /**
       * Set a default router for this communicator. All newly created proxies
       * will use this default router. To disable the default router, null can
       * be used. Note that this operation has no effect on existing proxies.
       *
       * You can also set a router for an individual proxy by calling the
       * operation ice_router on the proxy.
       */
      setDefaultRouter(router: RouterPrx | null): void;

      /**
       * Get the default locator this communicator.
       */
      getDefaultLocator(): LocatorPrx | null;
      /**
       * Set a default Ice locator for this communicator. All newly created
       * proxy and object adapters will use this default locator. To disable the
       * default locator, null can be used. Note that this operation has no
       * effect on existing proxies or object adapters.
       *
       * You can also set a locator for an individual proxy by calling the
       * operation ice_locator on the proxy, or for an object adapter by calling
       * the operation Ice::ObjectAdapter::setLocator on the object adapter.
       */
      setDefaultLocator(locator: LocatorPrx | null): void;

      /**
       * Flush any pending batch requests for this communicator. This means all
       * batch requests invoked on fixed proxies for all connections associated
       * with the communicator. Any errors that occur while flushing a
       * connection are ignored.
       */
      flushBatchRequests(): AsyncResultBase<void> | undefined;
    }
  }
}
