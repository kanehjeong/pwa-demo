import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationService } from './application.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApplicationService
  ]
})
export class CoreModule { }
