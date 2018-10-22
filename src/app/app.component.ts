import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static CheckTimeMilliseconds = 1000 * 15; // 15 seconds
  private readonly newVersionText = 'A new version of the app is available. Please refresh the page to update the app to the latest version.';

  constructor(private swUpdate: SwUpdate, private toastrService: ToastrService) {}

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        this.toastrService.success(this.newVersionText);
        console.log(`Current version is ${event.current.hash}. Available version is ${event.available.hash}`);
      });

      interval(AppComponent.CheckTimeMilliseconds)
        .pipe(startWith(0))
        .subscribe(() => {
        console.log('Checking for update...');
        this.swUpdate.checkForUpdate();
      });
    }
  }
}
