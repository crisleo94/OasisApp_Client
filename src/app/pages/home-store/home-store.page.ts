import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.page.html',
  styleUrls: ['./home-store.page.scss'],
})
export class HomeStorePage implements OnInit {

  habilitado = true;
  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

}
