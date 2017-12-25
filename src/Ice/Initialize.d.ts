export {Ice} from './Ice.ns';

import './Properties';
import './Logger';
import './ValueFactoryManagerI';

declare module './Ice.ns' {
  namespace Ice {
    class InitializationData {
      properties: Properties;
      logger: ILogger;
      valueFactoryManager: ValueFactoryManager;

      constructor();

      clone(): InitializationData;
    }

    function initialize(initData?: InitializationData): Communicator;
    function initialize(
      args: string[],
      initData?: InitializationData,
    ): Communicator;

    function createProperties(
      args?: string[],
      defaults?: Properties,
    ): Properties;

    function stringVersion(): string;
    function intVersion(): number;
  }
}
