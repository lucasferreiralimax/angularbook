import { Component, OnInit, HostListener, ViewEncapsulation, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

import { PostService } from '@services/post.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class FeedComponent implements OnInit {

  @Input() user: any;
  feed;

  constructor(private postService:PostService) { }

  getFeed(): void {
    this.postService.getListagem().subscribe(
      res => this.feed = res,
      error => {
        console.log(error)
        this.feed = this.postService.getListagemMock()
      }
    );
  }

  ngOnInit() {
    this.getFeed()
  }
}
