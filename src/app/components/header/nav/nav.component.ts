import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { UsuarioService } from '@services/usuario.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioService,
    private loginService: LoginService,
    private router: Router
  ) { }

  user;

  ngOnInit() {
    if(this.usuarioService.getUser()) {
      this.user = this.usuarioService.getUser()
    } else {
      this.user = this.usuarioService.getUserMockado()
    }
  }

  loginLoggout() {
    this.loginService.logout()
    this.router.navigate(['login'])
  }

}
