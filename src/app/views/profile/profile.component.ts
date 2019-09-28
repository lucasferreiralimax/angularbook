import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private usuarioService: UsuarioService) { }

  user = {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(this.usuarioService.getUser()) {
      this.user = this.usuarioService.getUser()
    } else {
      this.user = this.usuarioService.getUserMockado()
    }
  }

}
