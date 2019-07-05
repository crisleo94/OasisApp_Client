import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  habilitado = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  register2() {
    console.log('register clicked');
  }

}
