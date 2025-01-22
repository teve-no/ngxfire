export * from 'firebase/app';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { Injectable, Injector, makeEnvironmentProviders, NgZone, PLATFORM_ID, ɵNoopNgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FirebaseApp as IFirebaseApp } from 'firebase/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface FirebaseApp extends IFirebaseApp {}
@Injectable()
export class FirebaseApp {}
export const provideFirebaseApp = (fn: (injector: Injector) => IFirebaseApp) =>
  makeEnvironmentProviders([{ provide: FirebaseApp, useFactory: validateZonelessCSR(fn), deps: [Injector, NgZone, PLATFORM_ID] }]);

function validateZonelessCSR<T>(fn: (injector: Injector) => T) {
  return (injector: Injector, zone: NgZone, platformId: object) => {
    if (zone instanceof ɵNoopNgZone && isPlatformBrowser(platformId)) return fn(injector);
    throw Error('@teve/ngxfire only supports zoneless CSR, use @angular/fire instead');
  }
}
