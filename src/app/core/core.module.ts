import { AppUpdateService } from './app-update/app-update.service';
import { CheckForUpdateService } from './app-update/check-for-update.service';

import { NgModule } from '@angular/core';
import { NewsletterService } from './newsletter/newsletter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AppUpdateService,
    CheckForUpdateService,
    NewsletterService
  ]
})
export class CoreModule { }
