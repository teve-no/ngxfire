export * from 'firebase/analytics';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, makeEnvironmentProviders } from '@angular/core';
import { Analytics as IAnalytics } from 'firebase/analytics';
import { FirebaseApp } from '@teve/ngxfire/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Analytics extends IAnalytics {}
@Injectable()
export class Analytics {}
export const provideAnalytics = (fn: (injector: Injector) => IAnalytics) =>
  makeEnvironmentProviders([{ provide: Analytics, useFactory: fn, deps: [Injector, FirebaseApp] }]);
