import { Component, OnInit } from '@angular/core';

import { NotificationService } from '@services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  notifications: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notifications = this.notificationService.notificationAll()
  }

}
