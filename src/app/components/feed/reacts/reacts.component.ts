import { Component, OnInit, Input } from '@angular/core';
import { CommentComponent } from '@components/feed/comment/comment.component';

@Component({
  selector: 'app-reacts',
  templateUrl: './reacts.component.html',
  styleUrls: ['./reacts.component.sass']
})
export class ReactsComponent implements OnInit {

  reaction = false

  constructor() { }

  @Input() comment: CommentComponent;

  ngOnInit() {
  }

  commentFocus() {
    this.comment.onFocus()
  }

  react() {
    this.reaction = !this.reaction
    console.log("Like")
  }

}
