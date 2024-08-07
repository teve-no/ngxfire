export * from 'firebase/database';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import {
  Database as IDatabase,
  onChildAdded,
  onChildChanged,
  onChildMoved,
  onChildRemoved,
  onValue,
  Query,
  DataSnapshot
} from 'firebase/database';
import { Observable, delay, merge } from 'rxjs';
import { FirebaseApp } from '@teve/ngxfire/app';
import { Auth } from '@teve/ngxfire/auth';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Database extends IDatabase {}
@Injectable()
export class Database {}
export const provideDatabase = (fn: (injector: Injector) => IDatabase) =>
  makeEnvironmentProviders([{ provide: Database, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), Auth], [new Optional(), AppCheck]] }]);

export enum ListenEvent {
  added = 'child_added',
  removed = 'child_removed',
  changed = 'child_changed',
  moved = 'child_moved',
  value = 'value'
}

export interface QueryChange {
  snapshot: DataSnapshot;
  prevKey: string | null | undefined;
  event: ListenEvent;
}

const ListenerMethods = Object.freeze({
  [ListenEvent.added]: onChildAdded,
  [ListenEvent.removed]: onChildRemoved,
  [ListenEvent.changed]: onChildChanged,
  [ListenEvent.moved]: onChildMoved,
  [ListenEvent.value]: onValue
});

const validateEventsArray = (events?: ListenEvent[]) =>
  events?.length ? events : [ListenEvent.added, ListenEvent.removed, ListenEvent.changed, ListenEvent.moved];

export function fromRef(ref: Query, event: ListenEvent) {
  return new Observable<QueryChange>(subscriber => {
    const unsubscribe = ListenerMethods[event](ref,
      (snapshot, prevKey) => {
        subscriber.next({ snapshot, prevKey, event });
      },
      subscriber.error.bind(subscriber)
    );
    return { unsubscribe };
  }).pipe(
    // Ensures subscribe on observable is async. This handles
    // a quirk in the SDK where on/once callbacks can happen
    // synchronously.
    delay(0)
  );
}

export function stateChanges(query: Query, options: { events?: ListenEvent[] } = {}) {
  return merge(...validateEventsArray(options.events).map(event => fromRef(query, event)));
}
