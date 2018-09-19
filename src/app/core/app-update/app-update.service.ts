import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class AppUpdateService {

  constructor(updates: SwUpdate, notificationService: NotificationService) {
    updates.available.subscribe(event => {
      notificationService.notifySuccess(`Current version is ${event.current}. Available version is ${event.available}`);
    });

    updates.activated.subscribe(event => {
      notificationService.notifySuccess(`Old version was ${event.current}. New version is ${event.current}`);
    });
  }
}
