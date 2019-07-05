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
  correo: string;
  cont: string;
  user = {
    mail: '',
    pass: ''
  };

  form: NgForm;

  constructor(private router: Router, private alert: AlertController, private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  login(form) {

    if (this.user.mail === 'prueba@prueba.com' && this.user.pass === 'prueba123') {
      this.router.navigateByUrl('/home-store');
      localStorage.setItem('mail', this.correo);
      localStorage.setItem('pass', this.cont);
    } else {
       this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Datos incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
