import { HoraService } from './../../services/hora.service';
import { async } from '@angular/core/testing';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController, AlertController, MenuController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { JsonPipe } from '@angular/common';
import { text } from '@angular/core/src/render3';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-selectaddress',
  templateUrl: './selectaddress.page.html',
  styleUrls: ['./selectaddress.page.scss'],
})
export class SelectaddressPage implements OnInit {

  seleccion;
  habilitado = true;
  horaSeleccionada = '';
  horaServicio = '';

  constructor(private router: Router,
              private picker: PickerController,
              private alertCtrl: AlertController,
              private menu: MenuController,
              private hora: HoraService) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    // this.hora.horaSeleccionada.subscribe(hora => this.horaSeleccionada = hora);
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
          handler: ( event ) => {
            console.log('confirmacion', event);
            this.confirmacion( event );
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
            {text: '16:00 - 17:00', value: 9}
          ]
        }
      ]
    };
    const picker = await this.picker.create(times);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('Horas');
      console.log('Esta es la columna ', col);
      this.horaSeleccionada = await col.options[col.selectedIndex].text;
      console.log(this.horaSeleccionada);
      // this.confirmacion();
    });
  }

  async confirmacion( event ) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación Pedido',
      subHeader: 'Si desea cambiar la hora, seleccione cancelar',
// tslint:disable-next-line: no-string-literal
        message: 'Su pedido será entregado entre las ' +  event.Horas.text,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('ok texto', this.horaSeleccionada);
              this.router.navigateByUrl('/orderfinished');
            }
          }
        ],
    });

    await alert.present();
  }

  confirmarCierrre() {
    console.log('cierre confirmado');
  }

  cambioHora() {
    this.hora.cambiaHora(this.horaSeleccionada);
  }

  async newAddress() {
    const alert = await this.alertCtrl.create({
      header: 'Ingresar nueva dirección',
      inputs: [
        {
          name: 'direccion',
          type: 'text',
          placeholder: 'Dirección 1'
        },
        {
          name: 'direccion2',
          type: 'text',
          placeholder: 'Dirección 2'
        },
        {
          name: 'codigoPostal',
          type: 'number',
          placeholder: 'C.P'
        },
        // input date with min & max
        {
          name: 'poblacion',
          type: 'text',
          placeholder: 'Población'
        },
        // input date without min nor max
        {
          name: 'referencia',
          type: 'text',
          placeholder: 'Referencia(Color casa, frente a negocio, etc)'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }, {
          text: 'Guardar en el perfil',
          handler: () => {
            console.log('guardó la dirección');
          }
        }
      ]
    });

    await alert.present();
  }
}
