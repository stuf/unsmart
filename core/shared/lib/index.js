import {
  Observable,
  Stream,
  Property,
  constant,
} from 'kefir';

export const isObservable = x => x instanceof Observable;
export const isStream = x => x instanceof Stream;
export const isProperty = x => x instanceof Property;

export const toProperty = x => isObservable(x) ? x.toProperty() : constant(x);
