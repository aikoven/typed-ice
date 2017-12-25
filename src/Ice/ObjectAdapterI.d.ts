export {Ice} from './Ice.ns';

import './Communicator';
import './Promise';
import './Object';
import './Identity';
import './ObjectPrx';

declare module './Ice.ns' {
  namespace Ice {
    interface ObjectAdapter {
      /**
       * Get the name of this object adapter.
       */
      getName(): string;
      /**
       * Get the communicator this object adapter belongs to.
       */
      getCommunicator(): Communicator;

      /**
       * Activate all endpoints that belong to this object adapter.
       * After activation, the object adapter can dispatch requests
       * received through its endpoints.
       */
      activate(): void;
      /**
       * Temporarily hold receiving and dispatching requests. The object
       * adapter can be reactivated with the activate operation.
       *
       * Note: Holding is not immediate, i.e., after hold
       * returns, the object adapter might still be active for some
       * time. You can use waitForHold to wait until holding is
       * complete.
       */
      hold(): void;
      /**
       * Wait until the object adapter holds requests. Calling hold
       * initiates holding of requests, and waitForHold only returns
       * when holding of requests has been completed.
       */
      waitForHold(): Ice.Promise<void>;
      /**
       * Deactivate all endpoints that belong to this object adapter.
       * After deactivation, the object adapter stops receiving
       * requests through its endpoints. Object adapters that have been
       * deactivated must not be reactivated again, and cannot be used
       * otherwise. Attempts to use a deactivated object adapter raise
       * ObjectAdapterDeactivatedException however, attempts to
       * deactivate an already deactivated object adapter are
       * ignored and do nothing. Once deactivated, it is possible to
       * destroy the adapter to clean up resources and then create and
       * activate a new adapter with the same name.
       *
       * Note: After deactivate returns, no new requests
       * are processed by the object adapter. However, requests that
       * have been started before deactivate was called might
       * still be active. You can use waitForDeactivate to wait
       * for the completion of all requests for this object adapter.
       */
      deactivate(): Ice.Promise<void>;
      /**
       * Wait until the object adapter has deactivated. Calling
       * deactivate initiates object adapter deactivation, and
       * waitForDeactivate only returns when deactivation has
       * been completed.
       */
      waitForDeactivate(): Ice.Promise<void>;
      /**
       * Check whether object adapter has been deactivated.
       */
      isDeactivated(): boolean;
      /**
       * Destroys the object adapter and cleans up all resources held by
       * the object adapter. If the object adapter has not yet been
       * deactivated, destroy implicitly initiates the deactivation
       * and waits for it to finish. Subsequent calls to destroy are
       * ignored. Once destroy has returned, it is possible to create
       * another object adapter with the same name.
       */
      destroy(): Ice.Promise<void>;

      /**
       * Add a servant to this object adapter's Active Servant Map. Note
       * that one servant can implement several Ice objects by registering
       * the servant with multiple identities. Adding a servant with an
       * identity that is in the map already throws AlreadyRegisteredException.
       */
      add(servant: Ice.Object, id: Identity): ObjectPrx;
      /**
       * Like add, but with a facet. Calling `add(servant, id)`
       * is equivalent to calling addFacet with an empty facet.
       */
      addFacet(servant: Ice.Object, id: Identity, facet: string): ObjectPrx;
      /**
       * Add a servant to this object adapter's Active Servant Map,
       * using an automatically generated UUID as its identity. Note that
       * the generated UUID identity can be accessed using the proxy's
       * `ice_getIdentity` operation.
       */
      addWithUUID(servant: Ice.Object): ObjectPrx;
      /**
       * Like addWithUUID, but with a facet. Calling
       * `addWithUUID(servant)` is equivalent to calling
       * addFacetWithUUID with an empty facet.
       */
      addFacetWithUUID(servant: Ice.Object, facet: string): ObjectPrx;
      /**
       * Add a default servant to handle requests for a specific
       * category. Adding a default servant for a category for
       * which a default servant is already registered throws
       * AlreadyRegisteredException. To dispatch operation
       * calls on servants, the object adapter tries to find a servant
       * for a given Ice object identity and facet in the following
       * order:
       *
       * - The object adapter tries to find a servant for the identity
       *   and facet in the Active Servant Map.
       *
       * - If no servant has been found in the Active Servant Map, the
       *   object adapter tries to find a default servant for the category
       *   component of the identity.
       *
       * - If no servant has been found by any of the preceding steps,
       *   the object adapter tries to find a default servant for an empty
       *   category, regardless of the category contained in the identity.
       *
       * - If no servant has been found by any of the preceding steps,
       *   the object adapter gives up and the caller receives
       *   ObjectNotExistException or FacetNotExistException.
       */
      addDefaultServant(servant: Ice.Object, category: string): void;

      /**
       * Remove a servant (that is, the default facet) from the object
       * adapter's Active Servant Map.
       */
      remove(id: Identity): Ice.Object;
      /**
       * Like remove, but with a facet. Calling `remove(id)`
       * is equivalent to calling removeFacet with an empty facet.
       */
      removeFacet(id: Identity, facet: string): Ice.Object;
      // removeAllFacets
      /**
       * Remove the default servant for a specific category. Attempting
       * to remove a default servant for a category that is not
       * registered throws NotRegisteredException.
       */
      removeDefaultServant(category: string): Ice.Object;

      /**
       * Look up a servant in this object adapter's Active Servant Map
       * by the identity of the Ice object it implements.
       *
       * Note: This operation only tries to look up a servant in
       * the Active Servant Map. It does not attempt to find a servant
       * by using any installed ServantLocator.
       */
      find<T extends Ice.Object>(id: Identity): T | null;
      /**
       * Like find, but with a facet. Calling `find(id)`
       * is equivalent to calling findFacet with an empty
       * facet.
       */
      findFacet<T extends Ice.Object>(id: Identity, facet: string): T | null;
      // findAllFacets
      /**
       * Look up a servant in this object adapter's Active Servant Map,
       * given a proxy.
       *
       * Note: This operation only tries to lookup a servant in
       * the Active Servant Map. It does not attempt to find a servant
       * by using any installed ServantLocator.
       */
      findByProxy<T extends Ice.Object>(proxy: ObjectPrx): T | null;
      /**
       * Find the default servant for a specific category.
       */
      findDefaultServant<T extends Ice.Object>(category: string): T | null;

      /**
       * Create a proxy for the object with the given identity. If this
       * object adapter is configured with an adapter id, the return
       * value is an indirect proxy that refers to the adapter id. If
       * a replica group id is also defined, the return value is an
       * indirect proxy that refers to the replica group id. Otherwise,
       * if no adapter id is defined, the return value is a direct
       * proxy containing this object adapter's published endpoints.
       */
      createProxy(id: Identity): ObjectPrx;
      /**
       * Create a direct proxy for the object with the given identity.
       * The returned proxy contains this object adapter's published
       * endpoints.
       */
      createDirectProxy(id: Identity): ObjectPrx;
    }
  }
}
