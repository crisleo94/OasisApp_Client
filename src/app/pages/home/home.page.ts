import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  habilitado = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

}
