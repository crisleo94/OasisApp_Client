import { SelectproductsPageModule } from './../selectproducts/selectproducts.module';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orderdetailed',
  templateUrl: './orderdetailed.page.html',
  styleUrls: ['./orderdetailed.page.scss'],
})
export class OrderdetailedPage implements OnInit {

  @ViewChild('numero') numero: SelectproductsPageModule;

  constructor() { }

  ngOnInit() {
  }

  confirmarPedido() {
    console.log('Pedido confirmado');
  }

}
