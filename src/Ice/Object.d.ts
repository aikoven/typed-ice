export {Ice} from './Ice.ns';
import './Operation';
import './Current';

declare module './Ice.ns' {
  namespace Ice {
    class Object {
      ice_isA(type: string, current: Current): OperationResult<boolean>;
      ice_ping(current: Current): OperationResult<void>;
      ice_ids(current: Current): OperationResult<string[]>;
      ice_id(current: Current): OperationResult<string>;
    }
  }
}
