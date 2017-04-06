import './Ice';

declare module './Ice' {
  namespace Ice {
    export class Object {
      constructor();

      ice_isA(type: string): boolean;
      ice_ids(): string[];
      ice_id(): string;

      static ice_staticId(): string;
    }
  }
}
