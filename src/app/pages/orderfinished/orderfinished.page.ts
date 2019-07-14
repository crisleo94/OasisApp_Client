import { HoraService } from './../../services/hora.service';
import { SelectaddressPageModule } from './../selectaddress/selectaddress.module';
import { MenuController } from '@ionic/angular';
import { OrderdetailedPageModule } from './../orderdetailed/orderdetailed.module';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orderfinished',
  templateUrl: './orderfinished.page.html',
  styleUrls: ['./orderfinished.page.scss'],
})
export class OrderfinishedPage implements OnInit {

  habilitado = true;
  horaFinal = '';

  constructor(private menu: MenuController, private hora: HoraService) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
    this.hora.horaCompartida.subscribe(x => this.horaFinal = x);
  }

  confirmarPedido() {
    console.log('orden hecha');
  }

}
