export * from 'firebase/remote-config';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, makeEnvironmentProviders } from '@angular/core';
import { RemoteConfig as IRemoteConfig } from 'firebase/remote-config';
import { FirebaseApp } from '@teve/ngxfire/app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RemoteConfig extends IRemoteConfig {}
@Injectable()
export class RemoteConfig {}
export const provideRemoteConfig = (fn: (injector: Injector) => IRemoteConfig) =>
  makeEnvironmentProviders([{ provide: RemoteConfig, useFactory: fn, deps: [Injector, FirebaseApp] }]);
