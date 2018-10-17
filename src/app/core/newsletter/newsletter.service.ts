import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SwPush } from '@angular/service-worker';

@Injectable()
export class NewsletterService {

  private readonly VAPID_PUBLIC_KEY = 'BBG7Ys0byc5gI2P9EI6Jey1GtO8jK4vdDxoSZVih83wqOTGCxcQYv-Ht4lb3Sf8YiYA_CH2eZtG0bnheRmC0fqQ';

  readonly apiUrl = `${environment.ApiUrl}/api/newsletter`;

  constructor(private swPush: SwPush, private httpClient: HttpClient) { }

  async subscribeToNewsletter(): Promise<void> {
    const sub = await this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    });

    await this.addPushSubscriber(sub).toPromise();
  }

  private addPushSubscriber(sub: PushSubscription): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/subscription`, sub);
  }
}
