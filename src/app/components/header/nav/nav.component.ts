import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  user = {}

  ngOnInit() {
    this.user = this.usuarioService.getUserBasic()
  }

}
