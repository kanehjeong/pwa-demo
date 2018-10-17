import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class AppUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log(`Current version is ${event.current}. Available version is ${event.available}`);
    });

    updates.activated.subscribe(event => {
      console.log(`Old version was ${event.current}. New version is ${event.current}`);
    });
  }
}
