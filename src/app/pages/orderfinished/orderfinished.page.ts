import { OrderdetailedPageModule } from './../orderdetailed/orderdetailed.module';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orderfinished',
  templateUrl: './orderfinished.page.html',
  styleUrls: ['./orderfinished.page.scss'],
})
export class OrderfinishedPage implements OnInit {

  @ViewChild('numero') numero: OrderdetailedPageModule;

  constructor() { }

  ngOnInit() {
  }

  confirmarPedido() {
    console.log('orden hecha');
  }

}
