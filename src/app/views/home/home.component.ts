import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UsuarioService } from '@services/usuario.service'
import { PostService } from '@services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  user;
  feed;

  constructor(private usuarioService: UsuarioService,
              private postService: PostService) { }

  ngOnInit() {
    if(this.usuarioService.getUser()) {
      this.user = this.usuarioService.getUser()
    } else {
      this.user = this.usuarioService.getUserMockado()
    }
    this.getFeed()
  }

  getFeed(): void {
    this.postService.getListagem().subscribe(
      res => this.feed = res,
      error => {
        console.log(error)
        this.feed = this.postService.getListagemMock()
      }
    );
  }

}
