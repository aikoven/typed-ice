export {Ice} from './Ice.ns';

import './Value';

declare module './Ice.ns' {
  namespace Ice {
    class SliceInfo {
      typeId: string;
      compactId: number;
      bytes: number[];
      instances: Value[];
      hasOptionalMembers: boolean;
      isLastSlice: boolean;
    }

    class SlicedData {
      slices: SliceInfo[];
    }

    class UnknownSlicedValue extends Value {
      ice_getSlicedData(): SlicedData | null;
    }
  }
}