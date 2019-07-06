import { HoraService } from './../../services/hora.service';
import { SelectaddressPageModule } from './../selectaddress/selectaddress.module';
import { MenuController } from '@ionic/angular';
import { OrderdetailedPageModule } from './../orderdetailed/orderdetailed.module';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-orderfinished',
  templateUrl: './orderfinished.page.html',
  styleUrls: ['./orderfinished.page.scss'],
})
export class OrderfinishedPage implements OnInit {

  habilitado = true;
  @ViewChild('numero') numero: OrderdetailedPageModule;
  horaSeleccionada = '';

  constructor(private menu: MenuController, private hora: HoraService) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    this.hora.horaSeleccionada.subscribe(hora => this.horaSeleccionada = hora);
  }

  confirmarPedido() {
    console.log('orden hecha');
  }

}
