import { Component } from '@angular/core';
import { NotificationService } from '../core/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private notificationService: NotificationService) { }

  sayLytxOneRope(): void {
    this.notificationService.notifySuccess('Lytx One Rope!');
  }
}
