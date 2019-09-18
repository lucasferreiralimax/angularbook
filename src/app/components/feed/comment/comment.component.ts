import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() user: any;
  @ViewChild('comment', {static: true}) comment: ElementRef;

  constructor() { }

  ngOnInit() {
    // console.log(this.comment.nativeElement);
  }

}
