import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  user;

  ngOnInit() {
    if(this.usuarioService.getUser()) {
      this.user = this.usuarioService.getUser()
    } else {
      this.user = this.usuarioService.getUserMockado()
    }
  }

}
