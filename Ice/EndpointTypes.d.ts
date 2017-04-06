import {Ice} from './Ice';

declare module './Ice' {
  namespace Ice {
    export class EndpointSelectionType extends Ice.EnumBase {
      static Random: EndpointSelectionType;
      static Ordered: EndpointSelectionType;
    }
  }
}
