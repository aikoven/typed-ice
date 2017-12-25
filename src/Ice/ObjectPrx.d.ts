export {Ice} from './Ice.ns';

import './AsyncResult';
import './Communicator';
import './Identity';
import './Current';
import './EndpointTypes';
import './Router';
import './ConnectionI';

declare module './Ice.ns' {
  namespace Ice {
    interface ObjectPrxConstructor<T extends ObjectPrx> {
      new (): T;
    }

    class ObjectPrx {
      /**
       * Returns the type ID of the most-derived type supported by the remote
       * object.
       */
      static ice_staticId(): string;

      /**
       * If the passed proxy is for an object of type T, or a proxy for an
       * object with a type derived from T, the result of the cast is a non-null
       * reference to a proxy of type TPrx; otherwise, if the passed proxy
       * denotes an object of a different type (or if the passed proxy is null),
       * the result of the cast is a null reference.
       *
       * Note that a checked cast contacts the server. This is necessary because
       * only the implementation of an object in the server has definite
       * knowledge of the type of an object. Consequently, a checked cast is
       * implemented as the asynchronous method checkedCast, which may result in
       * a ConnectTimeoutException or an ObjectNotExistException.
       *
       * @see https://doc.zeroc.com/display/Ice37/JavaScript+Mapping+for+Interfaces#JavaScriptMappingforInterfaces-Down-castingProxiesinJavaScript
       */
      static checkedCast<TPrx extends ObjectPrx>(
        this: ObjectPrxConstructor<TPrx>,
        proxy: ObjectPrx | null | undefined,
        facet?: string,
        ctx?: Context,
      ): AsyncResultBase<TPrx | null>;

      /**
       * In contrast to checkedCast, an unchecked cast does not contact the
       * server and unconditionally returns a proxy of the requested type.
       * However, if you do use uncheckedCast, you must be certain that the
       * proxy really does support the type you are casting to; otherwise, if
       * you get it wrong, you will most likely get a run-time exception when
       * you invoke an operation on the proxy. The most likely error for such a
       * type mismatch is OperationNotExistException. However, other exceptions,
       * such as a marshaling exception are possible as well. And, if the object
       * happens to have an operation with the correct name, but different
       * parameter types, no exception may be reported at all and you simply end
       * up sending the invocation to an object of the wrong type; that object
       * may do rather nonsensical things.
       *
       * @see @see https://doc.zeroc.com/display/Ice37/JavaScript+Mapping+for+Interfaces#JavaScriptMappingforInterfaces-Down-castingProxiesinJavaScript
       */
      static uncheckedCast<TPrx extends ObjectPrx>(
        this: ObjectPrxConstructor<TPrx>,
        proxy: ObjectPrx,
        facet?: string,
      ): TPrx;
      static uncheckedCast<TPrx extends ObjectPrx>(
        this: ObjectPrxConstructor<TPrx>,
        proxy: null | undefined,
        facet?: string,
      ): null;
      static uncheckedCast<TPrx extends ObjectPrx>(
        this: ObjectPrxConstructor<TPrx>,
        proxy: ObjectPrx | null | undefined,
        facet?: string,
      ): TPrx | null;

      /**
       * Returns true if the remote object supports the type indicated by the id
       * argument, otherwise false. This method can only be invoked on a twoway
       * proxy.
       */
      ice_isA(id: string, ctx?: Context): AsyncResult<boolean>;
      /**
       * Determines whether the remote object is reachable. Does not return a
       * value.
       */
      ice_ping(ctx?: Context): AsyncResult<void>;
      /**
       * Returns the type IDs of the types supported by the remote object. The
       * return value is an array of strings. This method can only be invoked on
       * a twoway proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Type+IDs
       */
      ice_ids(ctx?: Context): AsyncResult<string[]>;
      /**
       * Returns the type ID of the most-derived type supported by the remote
       * object. This method can only be invoked on a twoway proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Type+IDs
       */
      ice_id(ctx?: Context): AsyncResult<string>;

      hashCode(): number;

      /**
       * This function compares two proxies for equality. Note that all aspects
       * of proxies are compared by this function, such as the communication
       * endpoints for the proxy. This means that, in general, if two proxies
       * compare unequal, that does not imply that they denote different
       * objects. For example, if two proxies denote the same Ice object via
       * different transport endpoints, equals returns false even though the
       * proxies denote the same object.
       */
      equals(r: ObjectPrx): boolean;

      /**
       * Returns the communicator that was used to create this proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Communicators
       */
      ice_getCommunicator(): Communicator;
      /**
       * Returns the identity of the Ice object represented by the proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Object+Identity
       */
      ice_getIdentity(): Identity;
      /**
       * Returns a new proxy having the given identity.
       *
       * @see https://doc.zeroc.com/display/Ice37/Object+Identity
       */
      ice_identity(newIdentity: Identity): this;
      /**
       * Returns the request context associated with the proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Request+Contexts
       */
      ice_getContext(): Context;
      /**
       * Returns a new proxy having the given request context.
       *
       * @see https://doc.zeroc.com/display/Ice37/Request+Contexts
       */
      ice_context(newContext: Context): this;
      /**
       * Returns the name of the facet associated with the proxy, or an empty
       * string if no facet has been set.
       *
       * @see https://doc.zeroc.com/display/Ice37/Versioning
       */
      ice_getFacet(): string;
      /**
       * Returns a new proxy having the given facet name.
       *
       * @see https://doc.zeroc.com/display/Ice37/Versioning
       */
      ice_facet(newFacet: string): this;
      /**
       * Returns the proxy's adapter ID, or an empty string if no adapter ID is
       * configured (as is the case with direct proxies).
       *
       * @see https://doc.zeroc.com/display/Ice37/Locators
       */
      ice_getAdapterId(): string;
      /**
       * Returns a new proxy having the given adapter ID.
       *
       * @see https://doc.zeroc.com/display/Ice37/Locators
       */
      ice_adapterId(newAdapterId: string): this;
      /**
       * Returns a sequence of Endpoint objects representing the direct proxy's
       * endpoints. For indirect proxies, an empty sequence is returned.
       *
       * @see https://doc.zeroc.com/display/Ice37/Proxy+Endpoints
       * @see https://doc.zeroc.com/display/Ice37/Terminology#Terminology-IndirectProxies
       */
      ice_getEndpoints(): string[];
      /**
       * Returns a new proxy having the given endpoints.
       *
       * @see https://doc.zeroc.com/display/Ice37/Proxy+Endpoints
       */
      ice_endpoints(newEndpoints: string[]): this;
      /**
       * Returns the locator cache timeout value in seconds.
       *
       * @see https://doc.zeroc.com/display/Ice37/Locator+Semantics+for+Clients
       */
      ice_getLocatorCacheTimeout(): number;
      /**
       * Returns a new proxy with the specified locator cache timeout in
       * seconds. When binding a proxy to an endpoint, the run time caches the
       * proxy returned by the locator and uses the cached proxy while the
       * cached proxy has been in the cache for less than the timeout.
       * Proxies older than the timeout cause the run time to rebind via the
       * locator. A value of 0 disables caching entirely, and a value of -1
       * means that cached proxies never expire. The default value is -1.
       *
       * @see https://doc.zeroc.com/display/Ice37/Locator+Semantics+for+Clients
       */
      ice_locatorCacheTimeout(newTimeout: number): this;
      /**
       * Returns a new proxy configured with the specified invocation timeout in
       * milliseconds. A value of -1 means an invocation never times out.
       * A value of -2 provides backward compatibility with Ice versions prior
       * to 3.6 by disabling invocation timeouts and using connection timeouts
       * to wait for the response of an invocation.
       *
       * @see https://doc.zeroc.com/display/Ice37/Invocation+Timeouts
       */
      ice_getInvocationTimeout(): number;
      /**
       * Returns the invocation timeout value in milliseconds.
       *
       * @see https://doc.zeroc.com/display/Ice37/Invocation+Timeouts
       */
      ice_invocationTimeout(newTimeout: number): this;
      /**
       * Returns the endpoint selection policy for the proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Connection+Establishment
       */
      ice_getEndpointSelection(): EndpointSelectionType;
      /**
       * Returns a new proxy having the given endpoint selection policy
       * (random or ordered).
       *
       * @see https://doc.zeroc.com/display/Ice37/Connection+Establishment
       */
      ice_endpointSelection(newType: EndpointSelectionType): this;
      /**
       * Returns true if the proxy uses only secure endpoints, otherwise false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Filtering+Proxy+Endpoints
       */
      ice_isSecure(): boolean;
      /**
       * Returns a new proxy whose endpoints may be filtered depending on the
       * boolean argument. If true, only endpoints using secure transports are
       * allowed, otherwise all endpoints are allowed.
       *
       * @see https://doc.zeroc.com/display/Ice37/Filtering+Proxy+Endpoints
       */
      ice_secure(b: boolean): this;
      /**
       * Returns the encoding version that is used to encode requests invoked on
       * this proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Data+Encoding
       */
      // ice_getEncodingVersion()
      /**
       * Returns a new proxy that uses the given encoding version to encode
       * requests. Raises UnsupportedEncodingException if the version is
       * invalid.
       *
       * @see https://doc.zeroc.com/display/Ice37/Data+Encoding
       */
      // ice_encodingVersion(e)
      /**
       * Returns true if the proxy prefers secure endpoints, otherwise false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Filtering+Proxy+Endpoints
       */
      ice_isPreferSecure(): boolean;
      /**
       * Returns a new proxy whose endpoints are filtered depending on the
       * boolean argument. If true, endpoints using secure transports are given
       * precedence over endpoints using non-secure transports. If false, the
       * default behavior gives precedence to endpoints using non-secure
       * transports.
       *
       * @see https://doc.zeroc.com/display/Ice37/Filtering+Proxy+Endpoints
       */
      ice_preferSecure(b: boolean): this;

      /**
       * Returns the router that is configured for the proxy (null if no router
       * is configured).
       *
       * @see https://doc.zeroc.com/display/Ice37/Glacier2
       */
      ice_getRouter(): RouterPrx | null;
      /**
       * Returns a new proxy configured with the given router proxy.
       *
       * @see https://doc.zeroc.com/display/Ice37/Glacier2
       */
      ice_router(router: RouterPrx | null): this;
      /**
       * Returns the locator that is configured for the proxy (null if no
       * locator is configured).
       *
       * @see https://doc.zeroc.com/display/Ice37/Locators
       */
      ice_getLocator(): LocatorPrx | null;
      /**
       * Returns a new proxy with the specified locator.
       *
       * @see https://doc.zeroc.com/display/Ice37/Locators
       */
      ice_locator(locator: LocatorPrx | null): this;

      /**
       * Returns true if the proxy uses twoway invocations, otherwise false.
       */
      ice_isTwoway(): boolean;
      /**
       * Returns a new proxy for making twoway invocations.
       */
      ice_twoway(): this;
      /**
       * Returns true if the proxy uses oneway invocations, otherwise false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Oneway+Invocations
       */
      ice_isOneway(): boolean;
      /**
       * Returns a new proxy for making oneway invocations.
       *
       * @see https://doc.zeroc.com/display/Ice37/Oneway+Invocations
       */
      ice_oneway(): this;
      /**
       * Returns true if the proxy uses batch oneway invocations, otherwise
       * false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Batched+Invocations
       */
      ice_isBatchOneway(): boolean;
      /**
       * Returns a new proxy for making batch oneway invocations.
       *
       * @see https://doc.zeroc.com/display/Ice37/Batched+Invocations
       */
      ice_batchOneway(): this;
      /**
       * Returns true if the proxy uses datagram invocations, otherwise false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Datagram+Invocations
       */
      ice_isDatagram(): boolean;
      /**
       * Returns a new proxy for making datagram invocations.
       *
       * @see https://doc.zeroc.com/display/Ice37/Datagram+Invocations
       */
      ice_datagram(): this;
      /**
       * Returns true if the proxy uses batch datagram invocations, otherwise
       * false.
       *
       * @see https://doc.zeroc.com/display/Ice37/Batched+Invocations
       */
      ice_isBatchDatagram(): boolean;
      /**
       * Returns a new proxy for making batch datagram invocations.
       *
       * @see https://doc.zeroc.com/display/Ice37/Batched+Invocations
       */
      ice_batchDatagram(): this;
      /**
       * Returns a new proxy whose endpoints all have the given connection
       * timeout value in milliseconds. A value of -1 disables timeouts.
       *
       * @see https://doc.zeroc.com/display/Ice37/Connection+Timeouts
       */
      ice_timeout(t: number): this;
      /**
       * Returns the connection ID, or an empty string if no connection ID has
       * been configured.
       *
       * @see https://doc.zeroc.com/display/Ice37/Connection+Establishment#ConnectionEstablishment-reuse
       */
      ice_getConnectionId(): string;
      /**
       * Returns a new proxy having the given connection ID.
       *
       * @see https://doc.zeroc.com/display/Ice37/Connection+Establishment#ConnectionEstablishment-reuse
       */
      ice_connectionId(id: string): this;
      /**
       * Returns an object representing the connection used by the proxy. If the
       * proxy is not currently associated with a connection, the Ice run time
       * attempts to establish a connection first, which means this method can
       * potentially block while network operations are in progress.
       *
       * @see https://doc.zeroc.com/display/Ice37/Using+Connections
       */
      ice_getConnection(): AsyncResult<Connection>;
      /**
       * Returns an object representing the connection used by the proxy, or
       * null if the proxy is not currently associated with a connection.
       *
       * @see https://doc.zeroc.com/display/Ice37/Using+Connections
       */
      ice_getCachedConnection(): Ice.Connection | null;
      /**
       * Sends a batch of operation invocations asynchronously.
       *
       * @see https://doc.zeroc.com/display/Ice37/Batched+Invocations
       */
      ice_flushBatchRequests(): AsyncResult<void>;
    }
  }
}
