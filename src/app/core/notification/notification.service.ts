import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) { }

  notifySuccess(message: string): void {
    this.toastrService.success(message);
  }
}
