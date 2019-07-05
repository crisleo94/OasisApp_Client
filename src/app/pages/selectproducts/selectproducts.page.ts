import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-selectproducts',
  templateUrl: './selectproducts.page.html',
  styleUrls: ['./selectproducts.page.scss'],
})
export class SelectproductsPage implements OnInit {

  habilitado = true;
  numero = 0;
  constructor(private alertCtrl: AlertController, private router: Router, private menu: MenuController) {
   }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  async confirmacionAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: 'Tu producto se ha agregado correctamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/store');
            this.numero = 0;
          }
        }
      ],
      cssClass: 'confirAlerta',
      translucent: true
    });

    await alert.present();
  }

  mas() {
    this.numero = this.numero + 1;
    console.log('Un producto mas');
  }

  menos() {
    if (this.numero > 0) {
      this.numero = this.numero - 1;
    } else {
      console.log('no se pueden negativos');
    }
    console.log('Un producto menos');
  }

  agregar() {
  }

}
