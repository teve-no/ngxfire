export * from 'firebase/firestore';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore as IFirestore,
  onSnapshot,
  DocumentData,
  DocumentReference,
  Query,
  QuerySnapshot,
  DocumentSnapshot,
  SnapshotListenOptions
} from 'firebase/firestore';
import { FirebaseApp } from '@teve/ngxfire/app';
import { Auth } from '@teve/ngxfire/auth';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface Firestore extends IFirestore {}
@Injectable()
export class Firestore {}
export const provideFirestore = (fn: (injector: Injector) => IFirestore) =>
  makeEnvironmentProviders([{ provide: Firestore, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), Auth], [new Optional(), AppCheck]] }]);

export function fromRef<T = DocumentData>(ref: DocumentReference<T>, options?: SnapshotListenOptions): Observable<DocumentSnapshot<T>>;
export function fromRef<T = DocumentData>(ref: Query<T>, options?: SnapshotListenOptions): Observable<QuerySnapshot<T>>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromRef(ref: any, options: SnapshotListenOptions = { includeMetadataChanges: false }) {
  return new Observable(subscriber => {
    const unsubscribe = onSnapshot(ref, options, {
      next: subscriber.next.bind(subscriber),
      error: subscriber.error.bind(subscriber),
      complete: subscriber.complete.bind(subscriber)
    });
    return { unsubscribe };
  });
}
