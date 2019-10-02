import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { NotificationService } from '@services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;
  registerForm;
  loadingLogin = false;
  loadingCadastro = false;

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['lucasferreiralimax@gmail.com', Validators.required],
      password: ['lucas', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email_register: ['', Validators.required],
      password_register: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmitLogin(formData) {
    this.loadingLogin = true
    this.loginService.loginUser(formData).subscribe(
      (res: any) => {
        localStorage.setItem("usuario", JSON.stringify(res.user))
        this.loginService.validationSet(res.logado)
        this.loadingLogin = false
        console.log(res)
        this.notificationService.notification("error", "Erro", "Email ou senha errado")
        if(res.logado) {
          this.router.navigate(['/'])
        }
      },
      err => {
        console.log("Error occured");
        this.loginService.validationSet(true)
        this.loadingLogin = false
        this.router.navigate(['/'])
      }
    )
  }

  onSubmitCadastro(formData) {
    this.loadingCadastro = true
    switch(formData.gender) {
      case 'woman':
        formData.photo = "assets/user_woman.jpg";
        break;
      case 'man':
        formData.photo = "assets/user_man.jpg";
        break;
      case 'others':
        formData.photo = "assets/user_other.jpg";
        break;
    }
    formData.since = new Date();
    formData.background = "assets/cover.jpg";

    this.loginService.registerUser(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.loadingCadastro = false
        this.notificationService.notification("success", "Sucesso", res.answer)
        this.registerForm.reset();
      },
      err => {
        this.loadingCadastro = false
        this.notificationService.notification("error", "Erro", err)
        console.log("Error occured", err)
      }
    );
  }

  ngOnInit() {
  }

}
