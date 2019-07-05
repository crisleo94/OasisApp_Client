import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.page.html',
  styleUrls: ['./recieved.page.scss'],
})
export class RecievedPage implements OnInit {


  habilitado = true;
  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  tiendaPuntos() {
    this.router.navigateByUrl('/store-points');
    console.log('Ha seleccionado la tienda puntos');
  }

}
