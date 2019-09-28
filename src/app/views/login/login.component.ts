import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['lucasferreiralimax@gmail.com', Validators.required],
      password: ['VocêÉespertinhoNé?', Validators.required]
    });
  }

  onSubmit(formData) {
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

  ngOnInit() {
  }

}
