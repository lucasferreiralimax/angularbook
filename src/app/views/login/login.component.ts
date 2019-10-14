import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '@services/login.service'
import { NotificationService } from '@services/notification.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm
  loadingLogin = false

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['lucasferreiralimax@gmail.com', [
        Validators.required,
        Validators.email
      ]],
      password: ['lucas', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmitLogin(formData) {
    this.loadingLogin = true
    this.loginForm.controls['password'].reset()

    this.loginService.loginUser(formData).subscribe(
      (res: any) => {
        this.loginService.validationSet(res)
        this.loadingLogin = false
        this.notificationService.notification(res.notification.type, res.notification.title, res.notification.content)
        if(this.loginService.validation()) {
          this.router.navigate(['/'])
        }
      },
      (err: any) => {
        this.loadingLogin = false
        this.notificationService.notification("error", err.error, err.message)
        console.log("error", err)
      }
    )
  }
}
