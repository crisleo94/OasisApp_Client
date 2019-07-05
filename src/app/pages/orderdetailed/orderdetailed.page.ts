import { MenuController, AlertController } from '@ionic/angular';
import { SelectproductsPageModule } from './../selectproducts/selectproducts.module';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orderdetailed',
  templateUrl: './orderdetailed.page.html',
  styleUrls: ['./orderdetailed.page.scss'],
})
export class OrderdetailedPage implements OnInit {

  habilitado = true;
  @ViewChild('numero') numero: SelectproductsPageModule;

  constructor(private menu: MenuController, private alert: AlertController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  confirmarPedido() {
    console.log('Pedido confirmado');
  }

  async confirmarCierre() {
    const alert = await this.alert.create({
      header: 'Confirmación',
      message: '¿Desea Eliminar el producto?',
      buttons: ['Cancelar', 'OK']
    });

    await alert.present();
  }

}
