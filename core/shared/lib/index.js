import { Observable, Stream, Property } from 'kefir';

export const isObservable = maybeObs => maybeObs instanceof Observable;
export const isStream = maybeStream => maybeStream instanceof Stream;
export const isProperty = maybeProp => maybeProp instanceof Property;

export const toProperty = x => isObservable(x) ? x : x.toProperty();
