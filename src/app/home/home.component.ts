import { Component } from '@angular/core';
import { ApplicationService } from '../core/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  numbers: number[];

  constructor(private applicationService: ApplicationService) { }

  async getRandomNumbers(): Promise<void> {
    this.numbers = await this.applicationService.getNumbers();
  }

  async subscribeToApplication(): Promise<void> {
    await this.applicationService.subscribeToApplication();
  }
}
