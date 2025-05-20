# ngxfire

[![License: MIT](https://img.shields.io/npm/l/@teve/ngxfire)](lib/LICENCE)
[![NPM Version](https://img.shields.io/npm/v/@teve/ngxfire)](https://www.npmjs.com/package/@teve/ngxfire)

**Zoneless AngularFire replacement**

AngularFire compatible replacement for zoneless apps, integrating a minimal set of basic rxjs featues from RxFire.

This library doesn't zone-wrap the firebase methods, but keeps the angularfire api with providers and basic rxjs methods for firestore and realtime database. In many cases it can be used as a drop-in replacement for angularfire, by only changing the imports...

Firebase peer dependencies:  
1.0: ^10.12.0  
1.2: ^10.12.0 (use of data-connect requires ^10.14.0)  
2.0: ^11.0.0
2.1: ^11.0.0 (use of ai requires ^11.8.0)