import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  user;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.user = this.usuarioService.getUser()
  }

}
