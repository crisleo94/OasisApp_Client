import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  habilitado = false;

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
    this.menu.enable(this.habilitado);
  }

  register() {
    this.router.navigateByUrl('/register2');
    console.log('register clicked');
  }


}
