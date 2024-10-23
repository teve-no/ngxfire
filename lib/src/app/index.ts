export * from 'firebase/app';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { Injectable, Injector, makeEnvironmentProviders, NgZone, ɵNoopNgZone } from '@angular/core';
import { FirebaseApp as IFirebaseApp } from 'firebase/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface FirebaseApp extends IFirebaseApp {}
@Injectable()
export class FirebaseApp {}
export const provideFirebaseApp = (fn: (injector: Injector) => IFirebaseApp) =>
  makeEnvironmentProviders([{ provide: FirebaseApp, useFactory: validateZoneless(fn), deps: [Injector, NgZone] }]);

function validateZoneless<T>(fn: (injector: Injector) => T) {
  return (injector: Injector, zone: NgZone) => {
    if (zone instanceof ɵNoopNgZone) return fn(injector);
    throw Error('ngxfire supports only zoneless');
  }
}
