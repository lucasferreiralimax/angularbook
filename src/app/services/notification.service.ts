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
  }

  notificationAll() {
    return this.notifications
  }
}
