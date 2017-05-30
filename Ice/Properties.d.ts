import './Ice';
import './PropertiesAdmin';

declare module './Ice' {
  namespace Ice {

    export class Properties {
      constructor(args?: string[], defaults?: Properties);

      getProperty(key: string): string;
      getPropertyWithDefault(key: string, value: string): string;
      getPropertyAsInt(key: string): number;
      getPropertyAsIntWithDefault(key: string, value: number): number;
      getPropertyAsList(key: string): string[];
      getPropertyAsListWithDefault(key: string, value: string[]): string[];
      setProperty(key: string, value: string): void;
      parse(data: string): void;
      parseCommandLineOptions(prefix: string, options: string[]): string[];
      parseIceCommandLineOptions(options: string[]): string[];
    }
  }
}
