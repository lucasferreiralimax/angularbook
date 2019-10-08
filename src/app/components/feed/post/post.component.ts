import { Component, OnInit, Input, ElementRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';

import { PostService } from '@services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() user: any;
  @Output() updateFeed = new EventEmitter<any>();
  @ViewChild('postContent', {static: true}) postContent: ElementRef;

  constructor(private postService:PostService) { }

  isPostagem: boolean = false;
  isPlaceholder: String;
  userBasic: any;

  @HostListener('click', ['$event.target']) onClick(el) {
    if(el.className == "post__photo") {
      this.postContent.nativeElement.focus()
    }
  }

  ngOnInit() {
    this.userBasic = JSON.parse(localStorage.getItem("usuario"));
  }

  getFeed() {
    this.updateFeed.next();
  }

  activePostagem(value) {
    const css = 'html, body { overflow-y: hidden; }';
    const head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    style.className = 'removeOver';

    this.isPostagem = value;

    if(this.postContent.nativeElement.textContent == "") {
      this.isPlaceholder = "";
    }
    if(this.isPostagem) {
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    } else {
      style = document.querySelector('.removeOver')
      head.removeChild(style);
    }
  }

  placeholderPostagem(value) {
    this.isPlaceholder = value;
  }

  onSubmitPost() {
    let commentText = this.postContent.nativeElement.textContent;

    if(commentText) {
      if(this.userBasic) {
        let { email, _id, name } = this.userBasic,
        postData = {
          iduser: _id,
          name: name,
          email: email,
          photo: "assets/skywalker.jpg",
          data: new Date(),
          comment: commentText
        };

        this.postService.setPost(postData).subscribe(
          res => {
            this.getFeed();
            this.postContent.nativeElement.textContent = "";
            this.activePostagem(false);
          },
          err => {
            console.log("Error occured");
            this.postService.setPostMock(commentText)
            this.postContent.nativeElement.textContent = "";
            this.getFeed()
            this.activePostagem(false);
          }
        )
      }
    }
  }

}
