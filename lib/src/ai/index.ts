export * from 'firebase/ai';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { AI as IAI } from 'firebase/ai';
import { FirebaseApp } from '@teve/ngxfire/app';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
export interface AI extends IAI {}
@Injectable()
export class AI {}
export const provideAI = (fn: (injector: Injector) => IAI) =>
  makeEnvironmentProviders([{ provide: AI, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), AppCheck]] }]);
