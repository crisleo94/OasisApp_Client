import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectproducts',
  templateUrl: './selectproducts.page.html',
  styleUrls: ['./selectproducts.page.scss'],
})
export class SelectproductsPage implements OnInit {

  numero = 0;

  constructor() { }

  ngOnInit() {
  }

  mas() {
    this.numero = this.numero + 1;
    console.log('Un producto mas');
  }

  menos() {
    if(this.numero > 0) {
      this.numero = this.numero - 1;
    } else {
      console.log('no se pueden negativos')
    }
    console.log('Un producto menos');
  }

}
