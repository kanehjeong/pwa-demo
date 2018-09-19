import { AppUpdateService } from './app-update/app-update.service';
import { CheckForUpdateService } from './app-update/check-for-update.service';
import { NotificationService } from './notification/notification.service';

import { NgModule } from '@angular/core';
@NgModule({
  providers: [
    AppUpdateService,
    CheckForUpdateService,
    NotificationService
  ]
})
export class CoreModule { }
