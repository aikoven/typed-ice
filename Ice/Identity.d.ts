import './Ice';

import './Struct';

declare module './Ice' {
  namespace Ice {
    export class Identity extends Ice.Struct {
      name: string;
      category: string;

      constructor(name: string, category: string);
    }
  }
}
