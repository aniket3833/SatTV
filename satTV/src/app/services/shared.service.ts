import { Injectable } from '@angular/core';
import { PushNotificationService } from 'ngx-push-notifications';
import { PushNotificationOptions } from '../model/pushNotificationOptions';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private notify: PushNotificationService 
  ) {
    
  }

  checkCompatibility() {
    return !!('Notification' in window);
  }

  requestPermission(): Observable<NotificationPermission> {
    return from(this.notify.requestPermission()) as Observable<NotificationPermission>;
  }

  isPermissionGranted(permission) {
    return permission == 'granted';
  }

  public create (title: string, payload?: PushNotificationOptions): Observable<any> {
    let options = {
      body  :   payload.body || "",
      icon  :   payload.icon || "",
      sound :   payload.sound || "",
      data  :   payload.data || {},
      tag   :   payload.tag || "",
      dir   :   payload.direction || 'auto' as NotificationDirection,
      lang  :   payload.lang || "en-US",
      renotify: payload.renotify || false,
      sticky  : payload.sticky || false,
      vibrate : payload.vibrate || [100, 50, 100],
      noscreen: payload.noscreen || false,
      silent  : payload.silent || false
    }
    return new Observable((obs: any) => {
       if (!this.checkCompatibility()) {
         const err = 'Notifications are not available in this browser.';
         console.error(err);
         obs.error(err);
         obs.complete();
      }

      this.requestPermission().subscribe((perm: NotificationPermission) => {
        if (!this.isPermissionGranted(perm)) {
          const err = 'The user hasn\'t granted you permission to send push notifications';
          console.error(err);
          obs.error(err);
          obs.complete();
        } else {
          const notif = new Notification(title, options);
          notif.onshow = (e: any) => {
            obs.next({ notification: notif, event: e });
          };
          notif.onclick = (e: any) => {
            obs.next({ notification: notif, event: e });
          };
          notif.onerror = (e: any) => {
            obs.error({ notification: notif, event: e });
          };
          notif.onclose = (e: any) => {
            obs.next({ notification: notif, event: e });
          };
        }
      });
    });
  }
}
