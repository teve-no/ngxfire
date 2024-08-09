# ngxfire

[![License: MIT](https://img.shields.io/npm/l/@teve/ngxfire)](lib/LICENCE)
[![NPM Version](https://img.shields.io/npm/v/@teve/ngxfire)](https://www.npmjs.com/package/@teve/ngxfire)

**Zoneless AngularFire replacement**

AngularFire compatible replacement for zoneless apps, integrating a minimal set of basic rxjs featues from RxFire.

This library doesn't zone-wrap the firebase methods, but keeps the angularfire api with providers and some rxjs featues.
In most cases it can be used as a drop-in replacement for angularfire, by only changing the imports...
