import './Ice';

declare module './Ice' {
  namespace Ice {
    export function stringToIdentity(str: string): Ice.Identity;
    export function identityToString(id: Ice.Identity): string;

    export function proxyIdentityCompare(lhs: Ice.ObjectPrx | null,
                                         rhs: Ice.ObjectPrx | null): number;
    export function proxyIdentityAndFacetCompare(
      lhs: Ice.ObjectPrx | null,
      rhs: Ice.ObjectPrx | null,
    ): number;
  }
}
