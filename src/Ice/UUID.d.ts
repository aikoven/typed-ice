export {Ice} from './Ice.ns';

declare module './Ice.ns' {
  namespace Ice {
    function generateUUID(): string;
  }
}
