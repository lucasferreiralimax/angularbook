import { Component, OnInit, HostListener, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class FeedComponent implements OnInit {

  @Input() user: any;
  @Input() feed: any;
  @Output() updateFeed = new EventEmitter<any>();

  constructor() { }

  ngOnInit () { }

  getFeed() {
    this.updateFeed.next();
  }
}
