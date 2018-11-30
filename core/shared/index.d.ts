import { Observable, Stream, Property } from 'kefir';

function toProperty<V, E>(maybeObs: V): Property<V, E>;
function toProperty<V, E>(maybeObs: Stream<V, E>): Property<V, E>;
function toProperty<V, E>(maybeObs: Property<V, E>): Property<V, E>;
