export {Ice} from './Ice.ns';

import './PropertiesAdmin';

declare module './Ice.ns' {
  namespace Ice {
    class Properties {
      constructor(args?: string[], defaults?: Properties);

      /**
       * Get a property by key. If the property is not set, an empty
       * string is returned.
       */
      getProperty(key: string): string;
      /**
       * Get a property by key. If the property is not set, the
       * given default value is returned.
       */
      getPropertyWithDefault(key: string, value: string): string;
      /**
       * Get a property as an integer. If the property is not set, 0
       * is returned.
       */
      getPropertyAsInt(key: string): number;
      /**
       * Get a property as an integer. If the property is not set, the
       * given default value is returned.
       */
      getPropertyAsIntWithDefault(key: string, value: number): number;
      /**
       * Get a property as a list of strings. The strings must be
       * separated by whitespace or comma. If the property is not set,
       * an empty list is returned. The strings in the list can contain
       * whitespace and commas if they are enclosed in single or double
       * quotes. If quotes are mismatched, an empty list is returned.
       * Within single quotes or double quotes, you can escape the
       * quote in question with \, e.g. O'Reilly can be written as
       * O'Reilly, "O'Reilly" or 'O\'Reilly'.
       */
      getPropertyAsList(key: string): string[];
      /**
       * Get a property as a list of strings.  The strings must be
       * separated by whitespace or comma. If the property is not set,
       * the default list is returned. The strings in the list can contain
       * whitespace and commas if they are enclosed in single or double
       * quotes. If quotes are mismatched, the default list is returned.
       * Within single quotes or double quotes, you can escape the
       * quote in question with \, e.g. O'Reilly can be written as
       * O'Reilly, "O'Reilly" or 'O\'Reilly'.
       */
      getPropertyAsListWithDefault(key: string, value: string[]): string[];
      /**
       * Get all properties whose keys begins with prefix.
       * If prefix is an empty string, then all properties are returned.
       */
      getPropertiesForPrefix(prefix: string): Ice.PropertyDict;
      /**
       * Set a property. To unset a property, set it to
       * the empty string.
       */
      setProperty(key: string, value: string): void;
      parse(data: string): void;
      /**
       * Convert a sequence of command-line options into properties.
       * All options that begin with `--prefix.` are converted into properties.
       *
       * If the prefix is empty, all options that begin with `--` are converted
       * to properties.
       */
      parseCommandLineOptions(prefix: string, options: string[]): string[];
      /**
       * Convert a sequence of command-line options into properties.
       * All options that begin with one of the following prefixes
       * are converted into properties: `--Ice`, `--IceBox`, `--IceGrid`,
       * `--IcePatch2`, `--IceSSL`, `--IceStorm`, `--Freeze`, and `--Glacier2`.
       */
      parseIceCommandLineOptions(options: string[]): string[];
    }
  }
}
