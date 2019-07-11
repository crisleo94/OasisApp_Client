import { AuthenticationService } from './../../services/authentication.service';
import { UsuarioModel } from './../../models/usuario.model';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  habilitado = false;
  user = new UsuarioModel();

  validationMessages: {
    mail: [
      {type: 'required', message: '*El correo es obligatorio'},
      {type: 'pattern', message: '*Ingrese un correo válido'}
    ],
    pass: [
      {type: 'required', message: '*La contraseña es obligatoria'},
      {type: 'minlength', message: '*La contraseña debe tener mínimo 6 caracteres'}
    ]
  };

  constructor(private router: Router,
              private alert: AlertController,
              private menu: MenuController,
              private auth: AuthenticationService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    // this.validacion();
  }

  login(form: FormGroup) {
    if (form.valid) {
      this.auth.loginUser(this.user)
      .then((resp) => {
        console.log(resp);
        this.router.navigateByUrl('/home-store');
      }).catch((err) => {
        console.log(err);
      });
    } else if (form.invalid) {
      // this.errorLogin();
      console.error('Mal inicio de sesión');
    }
  }

  /* validacion() {
    this.loginP = this.fb.group({
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  } */

  async errorLogin() {
    const alert = await this.alert.create({
      header: 'Error en los datos de ingreso',
      message: 'Correo y/o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
