import { NgForm } from '@angular/forms';
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

  constructor(private menu: MenuController, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  register(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl('/register2');
    } else {
      this.errorRegister();
    }
  }

  async errorRegister() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Debe llenar todos los campos para continuar',
      buttons: ['OK']
    });

    await alert.present();
  }


}
