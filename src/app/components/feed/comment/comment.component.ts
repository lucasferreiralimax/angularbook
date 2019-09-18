import { Component, OnInit, Input, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() user: any;
  @ViewChild('commentContent', {static: true}) commentContent: ElementRef;

  constructor() { }

  @HostListener('click', ['$event.target']) onClick(el) {
    if(el.className == "comment__photo") {
      this.commentContent.nativeElement.focus()
    }
  }

  ngOnInit() {
  }

}
