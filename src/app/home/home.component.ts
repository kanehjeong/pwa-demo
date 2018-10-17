import { Component } from '@angular/core';
import { NewsletterService } from '../core/newsletter/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private newsletterService: NewsletterService) { }

  async subscribeToNewsletter(): Promise<void> {
    await this.newsletterService.subscribeToNewsletter();
  }
}
