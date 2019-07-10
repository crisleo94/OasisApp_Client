import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  habilitado = false;
  user = new UsuarioModel();
  registro: FormGroup;
  errorMessage = '';
  successMessage = '';

  validationMessages = {
    cssClass: 'errorPass',
    email: [
      {type: 'required', message: '*El correo es obligatorio'},
      {type: 'pattern', message: '*Ingrese un correo válido'}
    ],
    password: [
      {type: 'required', message: '*La contraseña es obligatoria'},
      {type: 'minLength', message: '*La contraseña debe tener mínimo 6 caracteres'}
    ],
    nombre: [
      {type: 'required', message: '*El nombre es obligatorio'},
      {type: 'minLength', message: '*Este campo debe tener mínimo 5 caracteres'}
    ],
    password2: [
      {type: 'required', message: '*Las contraseñas deben coincidir'},
      {type: 'minLength', message: '*La contraseña debe tener mínimo 6 caracteres'}
    ],
    usuario: [
      {type: 'required', message: '*El nombre de usuario es requerido'},
      {type: 'minLength', message: '*El nombre de usuario debe tener mínimo 6 caracteres'}
    ]
  };

  constructor(private menu: MenuController,
              private router: Router,
              private alert: AlertController,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    this.registro = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  register(form) {
    if (form.valid) {
      console.log(form);
    } else { console.log(form); }
  }

  /* async errorRegister() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Debe llenar todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  } */


}
