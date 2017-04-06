import './Ice';

declare module './Ice' {
  namespace Ice {
    export class InitializationData {
      properties: Ice.Properties;
      // logger: TODO

      constructor();

      clone(): InitializationData;
    }
    
    export function initialize(initData?: InitializationData): Ice.Communicator;
    export function initialize(args: string[], 
                               initData?: InitializationData): Ice.Communicator;
    
    export function createProperties(args?: string[], 
                                     defaults?: Ice.Properties): Ice.Properties;
    
    
  }
}
