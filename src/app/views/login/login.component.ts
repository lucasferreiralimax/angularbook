import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { UsuarioService } from '@services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;
  registerForm;
  constructor(
    private loginService: LoginService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['lucasferreiralimax@gmail.com', Validators.required],
      password: ['VocêÉespertinhoNé?', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email_cadastro: ['', Validators.required],
      password_cadastro: ['', Validators.required],
      photo: 'assets/skywalker.jpg',
      background: 'assets/cover.jpg',
      bio: '',
      location: '',
      relationship: ''
    });
  }

  onSubmitLogin(formData) {
    this.loginService.loginUser(formData).subscribe(
      res => {
        localStorage.setItem("usuario", JSON.stringify(res))
        this.loginForm.reset()
      },
      err => {
        console.log("Error occured");
      }
    )
    this.loginService.validationSet(true)
    this.router.navigate(['/'])
  }

  onSubmitCadastro(formData) {
    this.usuarioService.setUser(formData).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log("Error occured", err)
      }
    );
    this.registerForm.reset();
  }

  ngOnInit() {
  }

}
