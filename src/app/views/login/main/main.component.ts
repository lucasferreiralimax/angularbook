import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl } from '@angular/forms'
import { LoginService } from '@services/login.service'
import { NotificationService } from '@services/notification.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  registerForm
  loadingCadastro = false
  novaContaMobile = false

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email_register: ['', [
        Validators.required,
        Validators.email
      ]],
      password_register: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmitCadastro(formData) {
    this.loadingCadastro = true
    formData.since = new Date()
    formData.background = "assets/cover.jpg"

    switch(formData.gender) {
      case 'woman':
        formData.photo = "assets/user_woman.jpg"
        break;
      case 'man':
        formData.photo = "assets/user_man.jpg"
        break;
      case 'others':
        formData.photo = "assets/user_other.jpg"
        break;
    }

    this.loginService.registerUser(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.loadingCadastro = false
        this.notificationService.notification(res.notification.type, res.notification.title, res.notification.content)
        if(res.notification.content == "Usuário já cadastrado.") {
          console.log("usuario teste")
          this.registerForm.controls['email_register'].reset()
          this.registerForm.controls['password_register'].reset()
        } else {
          this.registerForm.reset()
        }
      },
      (err: any) => {
        this.loadingCadastro = false
        this.notificationService.notification("error", "Erro", "Aconteceu algum erro na base de dados tente novamente mais tarde")
        console.log(err)
      }
    )
  }
}
