import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifications: any = [];

  notification(type, title, content) {
    this.notifications.push({
      type: type,
      title: title,
      content: content
    })
    setTimeout(() => {
      this.notifications.pop()
    }, 10000);
  }

  notificationAll() {
    return this.notifications
  }
}
