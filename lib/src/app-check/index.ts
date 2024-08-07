export * from 'firebase/app-check';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, makeEnvironmentProviders } from '@angular/core';
import { AppCheck as IAppCheck } from 'firebase/app-check';
import { FirebaseApp } from '@teve/ngxfire/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppCheck extends IAppCheck {}
@Injectable()
export class AppCheck {}
export const provideAppCheck = (fn: (injector: Injector) => IAppCheck) =>
  makeEnvironmentProviders([{ provide: AppCheck, useFactory: fn, deps: [Injector, FirebaseApp] }]);
