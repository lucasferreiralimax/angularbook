import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '@services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  registerForm;

  constructor(
    private usuarioService:UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      bio: '',
      location: '',
      relationship: ''
    });
  }
  onSubmit(formData) {
    console.warn('Your order has been submitted', formData);
    this.usuarioService.setUser(formData);
    this.registerForm.reset();
  }
  ngOnInit() { }

}
