import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-points',
  templateUrl: './store-points.page.html',
  styleUrls: ['./store-points.page.scss'],
})
export class StorePointsPage implements OnInit {

  habilitado = true;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

}
