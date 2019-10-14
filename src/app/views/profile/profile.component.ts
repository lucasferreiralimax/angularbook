import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '@services/usuario.service'
import { PostService } from '@services/post.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user;
  feed;

  constructor(private route: ActivatedRoute,
              private usuarioService: UsuarioService,
              private postService: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(this.usuarioService.getUser()) {
      this.user = this.usuarioService.getUser()
    } else {
      this.user = this.usuarioService.getUserMockado()
    }
    this.getFeed()
  }

  getFeed(): void {
    let obj = { iduser: this.user.id }
    if(obj.iduser) {
      this.postService.getListagemProfile(obj).subscribe(
        res => this.feed = res,
        error => {
          console.log(error)
          this.feed = this.postService.getListagemMock()
        }
      )
    }
  }

}
