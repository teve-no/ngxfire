export * from 'firebase/crashlytics';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { Crashlytics as ICrashlytics } from 'firebase/crashlytics';
import { FirebaseApp } from '@teve/ngxfire/app';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface Crashlytics extends ICrashlytics {}
@Injectable()
export class Crashlytics {}
export const provideCrashlytics = (fn: (injector: Injector) => ICrashlytics) =>
  makeEnvironmentProviders([{ provide: Crashlytics, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), AppCheck]] }]);
