import { BDService } from './../../services/bd.service';
import { AuthenticationService } from './../../services/authentication.service';
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
      {type: 'minlength', message: '*La contraseña debe tener mínimo 6 caracteres'}
    ],
    nombre: [
      {type: 'required', message: '*El nombre es obligatorio'},
      {type: 'minlength', message: '*Este campo debe tener mínimo 5 caracteres'}
    ],
    password2: [
      {type: 'required', message: '*Las contraseñas deben coincidir'}
    ],
    usuario: [
      {type: 'required', message: '*El nombre de usuario es requerido'},
      {type: 'minlength', message: '*El nombre de usuario debe tener mínimo 6 caracteres'}
    ],
    genero: [
      {type: 'required', message: '*Debe seleccionar un género'}
    ]
  };

  constructor(private menu: MenuController,
              private router: Router,
              private alert: AlertController,
              private fb: FormBuilder,
              private auth: AuthenticationService,
              private db: BDService) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    // validaciones para el formulario
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
        Validators.required
      ])),
      genero: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  register(form: FormGroup) {
    // this.router.navigateByUrl('/register2');
    if (this.registro.valid) {
      const mail = this.registro.controls.email.value;
      this.db.postUserData(this.user);
      console.log(mail);
      console.log(this.registro);
      // const pass = form.controls.password.value;
      this.auth.registerUser(form)
      .then((res) => {
        this.user.ID = res.user.uid;
        this.user.email = mail;
        console.log(res);
        this.correctRegister(mail);
      }).catch((err) => {
        console.log(err);
        this.errorRegister();
      });
      console.log(form);
      // return this.router.navigateByUrl('/register2');
    } else { console.error(form); }
  }

  async errorRegister() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Ha ocurrido un error al momento de registrar su cuenta, verifique los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async correctRegister(mail) {
    const alert = await this.alert.create({
      cssClass: 'confAlert',
      header: 'Cuenta Creada',
      subHeader: 'Ahora registre una dirección',
      message: 'Se cuenta se ha creado con exito, verifique su correo ' + mail,
      buttons: ['OK']
    });

    await alert.present();
  }

  localStorage(user: UsuarioModel) {
    localStorage.setItem('UserID', user.ID);
    localStorage.setItem('correo', user.email);
    localStorage.setItem('correo', user.usuario);
    localStorage.setItem('correo', user.password);
  }


}
