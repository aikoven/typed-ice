export {Ice} from './Ice.ns';

import './Identity';
import './ObjectPrx';

declare module './Ice.ns' {
  namespace Ice {
    function stringToIdentity(str: string): Identity;
    function identityToString(id: Identity): string;

    function proxyIdentityCompare(
      lhs: ObjectPrx | null,
      rhs: ObjectPrx | null,
    ): number;
    function proxyIdentityAndFacetCompare(
      lhs: ObjectPrx | null,
      rhs: ObjectPrx | null,
    ): number;
  }
}
