import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController, AlertController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-selectaddress',
  templateUrl: './selectaddress.page.html',
  styleUrls: ['./selectaddress.page.scss'],
})
export class SelectaddressPage implements OnInit {

  Horas = '1';

  constructor(private router: Router,
              private picker: PickerController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async selectHora() {
    const times: PickerOptions = {
      cssClass: 'horasSelect',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'btnCancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            // this.confirmacion();
            console.log('confirmacion', this.Horas);
            this.confirmacion();
          }
        }
      ],
      columns: [
        {
          name: 'Horas',
          options: [
            {text: '8:00 - 9:00', value: 1},
            {text: '9:00 - 10:00', value: 2},
            {text: '10:00 - 11:00', value: 3},
            {text: '11:00 - 12:00', value: 4},
            {text: '12:00 - 13:00', value: 5},
            {text: '13:00 - 14:00', value: 6},
            {text: '14:00 - 15:00', value: 7},
            {text: '15:00 - 16:00', value: 8},
            {text: '16:00 - 17:00', value: 9},
            {text: '17:00 - 18:00', value: 10}
          ]
        }
      ]
    };
    const picker = await this.picker.create(times);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('Horas');
      console.log('Esta es la columna ', col);
      this.Horas = col.options[col.selectedIndex].text;
      console.log(this.Horas);
      // this.confirmacion();
    });
  }

  async confirmacion() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación Pedido',
        message: `Su pedido será entregado entre las ${this.Horas}`,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('ok texto', this.Horas);
            }
          }
        ],
    });

    await alert.present();
  }
}
