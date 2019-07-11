import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioModel } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  usuario = new UsuarioModel();

  constructor(  private router: Router,
                private alert: AlertController ) { }

  ngOnInit() {
  }

  userForgot(form: NgForm) {
    if (form.valid) {
      this.forgotConfirmation();
    }
  }

  async forgotConfirmation() {
    const alert = await this.alert.create({
      header: 'Recuperación de contraseña',
      message: 'Se ha enviado un mensaje de recuperación de contraseña a su correo ' + this.usuario.email,
      buttons: ['OK']
    });

    await alert.present();
  }

}
