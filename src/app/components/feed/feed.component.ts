import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core'
import { FormControl } from '@angular/forms'

import { PostService } from '@services/post.service'
import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class FeedComponent implements OnInit {

  constructor(private postService:PostService,
              private usuarioService:UsuarioService) { }

  feed = []
  user = {}

  getFeed(): void {
    console.log(this.postService.getListagem())
    this.postService.getListagem().subscribe(data =>  {
      console.log(data);
      this.feed = data
    });
  }

  testePhone() {
    this.getFeed()  
  }

  ngOnInit() {
    this.postService.setFeed()
    this.user = this.usuarioService.getUserBasic()
    this.getFeed()
  }
}
