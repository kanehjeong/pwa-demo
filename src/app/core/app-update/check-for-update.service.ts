import { SwUpdate } from '@angular/service-worker';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class CheckForUpdateService {

  private static CheckTimeMilliseconds = 1000 * 60; // 60 seconds

  constructor(updates: SwUpdate) {
    interval(CheckForUpdateService.CheckTimeMilliseconds).subscribe(() => updates.checkForUpdate());
  }
}
