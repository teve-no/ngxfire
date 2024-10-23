export * from 'firebase/performance';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, makeEnvironmentProviders } from '@angular/core';
import { FirebasePerformance as IPerformance } from 'firebase/performance';
import { FirebaseApp } from '@teve/ngxfire/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface Performance extends IPerformance {}
@Injectable()
export class Performance {}
export const providePerformance = (fn: (injector: Injector) => IPerformance) =>
  makeEnvironmentProviders([{ provide: Performance, useFactory: fn, deps: [Injector, FirebaseApp] }]);
