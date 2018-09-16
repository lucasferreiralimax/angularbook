import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core'
import { FormControl } from '@angular/forms'

import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit {

  constructor(private postService:PostService) { }

  feed = []

  getFeed(): void {
    this.postService.getFeed()
        .subscribe(feed => this.feed = feed)
  }

  ngOnInit() {
    this.postService.setFeed()
    this.getFeed()
  }
}
