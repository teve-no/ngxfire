export * from 'firebase/data-connect';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { DataConnect as IDataConnect } from 'firebase/data-connect';
import { FirebaseApp } from '@teve/ngxfire/app';
import { Auth } from '@teve/ngxfire/auth';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DataConnect extends IDataConnect {}
@Injectable()
export class DataConnect {}
export const provideDataConnect = (fn: (injector: Injector) => IDataConnect) =>
  makeEnvironmentProviders([{ provide: DataConnect, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), Auth], [new Optional(), AppCheck]] }]);
