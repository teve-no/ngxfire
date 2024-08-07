export * from 'firebase/auth';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { Auth as IAuth } from 'firebase/auth';
import { FirebaseApp } from '@teve/ngxfire/app';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Auth extends IAuth {}
@Injectable()
export class Auth {}
export const provideAuth = (fn: (injector: Injector) => IAuth) =>
  makeEnvironmentProviders([{ provide: Auth, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), AppCheck]] }]);
