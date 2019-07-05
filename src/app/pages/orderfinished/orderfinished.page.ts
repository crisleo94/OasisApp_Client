import { MenuController } from '@ionic/angular';
import { OrderdetailedPageModule } from './../orderdetailed/orderdetailed.module';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orderfinished',
  templateUrl: './orderfinished.page.html',
  styleUrls: ['./orderfinished.page.scss'],
})
export class OrderfinishedPage implements OnInit {

  habilitado = true;
  @ViewChild('numero') numero: OrderdetailedPageModule;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  confirmarPedido() {
    console.log('orden hecha');
  }

}
