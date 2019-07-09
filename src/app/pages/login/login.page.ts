import { UsuarioModel } from './../../models/usuario.model';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  habilitado = false;
  mail: string;
  pass: string;
  user = new UsuarioModel();

  constructor(private router: Router, private alert: AlertController, private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  login(form: NgForm) {
    if (form.valid) {
      if (this.user.email === 'prueba@prueba.com' && this.user.password === 'prueba123') {
        this.router.navigateByUrl('/home-store');
      }
    } else if (form.invalid) {
      this.errorLogin();
    }
  }

  async errorLogin() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Correo y/o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
