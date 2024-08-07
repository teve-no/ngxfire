export * from 'firebase/storage';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { FirebaseStorage as IStorage } from 'firebase/storage';
import { FirebaseApp } from '@teve/ngxfire/app';
import { Auth } from '@teve/ngxfire/auth';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Storage extends IStorage {}
@Injectable()
export class Storage {}
export const provideStorage = (fn: (injector: Injector) => IStorage) =>
  makeEnvironmentProviders([{ provide: Storage, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), Auth], [new Optional(), AppCheck]] }]);
