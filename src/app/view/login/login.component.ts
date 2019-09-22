import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(formData) {
    console.warn('Your login submitted', formData);
    this.loginService.loginUser(formData).subscribe(
      res => {
        localStorage.setItem("usuario", JSON.stringify(res))
      },
      err => {
        console.log("Error occured");
      }
    )
    this.loginForm.reset();
  }

  ngOnInit() {
  }

}
