# ngxfire

AngularFire compatible replacement for zoneless apps, integrating a minimal set of basic rxjs featues from RxFire.

This library doesn't zone-wrap the firebase methods, but keeps the angularfire api with providers and basic rxjs methods for firestore and realtime database. In many cases it can be used as a drop-in replacement for angularfire, by only changing the imports...
