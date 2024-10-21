export * from 'firebase/vertexai';

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, Injector, Optional, makeEnvironmentProviders } from '@angular/core';
import { VertexAI as IVertexAI } from 'firebase/vertexai';
import { FirebaseApp } from '@teve/ngxfire/app';
import { AppCheck } from '@teve/ngxfire/app-check';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VertexAI extends IVertexAI {}
@Injectable()
export class VertexAI {}
export const provideVertexAI = (fn: (injector: Injector) => IVertexAI) =>
  makeEnvironmentProviders([{ provide: VertexAI, useFactory: fn, deps: [Injector, FirebaseApp, [new Optional(), AppCheck]] }]);
