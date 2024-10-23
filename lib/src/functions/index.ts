export * from 'firebase/functions';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { Functions as IFunctions } from 'firebase/functions';
import { FirebaseApp } from '@teve/ngxfire/app';
import { Auth } from '@teve/ngxfire/auth';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface Functions extends IFunctions {}
@Injectable()
export class Functions {}
export const provideFunctions = (fn: (injector: Injector) => IFunctions) =>
  makeEnvironmentProviders([{ provide: Functions, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), Auth], [new Optional(), AppCheck]] }]);
