export * from 'firebase/messaging';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, makeEnvironmentProviders } from '@angular/core';
import { Messaging as IMessaging } from 'firebase/messaging';
import { FirebaseApp } from '@teve/ngxfire/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Messaging extends IMessaging {}
@Injectable()
export class Messaging {}
export const provideMessaging = (fn: (injector: Injector) => IMessaging) =>
  makeEnvironmentProviders([{ provide: Messaging, useFactory: fn, deps: [Injector, FirebaseApp] }]);
