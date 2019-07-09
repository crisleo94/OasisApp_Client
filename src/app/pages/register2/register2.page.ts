import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { MenuController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  user = new UsuarioModel();
  habilitado = false;

  constructor(private menu: MenuController, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  register2(form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl('/home-store');
    } else {
      this.errorRegister2();
    }
  }

  async errorRegister2() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Debe llenar todos los campos para poder continuar.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
