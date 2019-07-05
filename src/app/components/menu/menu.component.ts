import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {

    }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  profile() {
    this.router.navigateByUrl('/profile');
  }
  cart() {
    this.router.navigateByUrl('/cart');
  }
  points() {
    this.router.navigate(['/store-points']);
  }
  logout() {
    this.router.navigateByUrl('/login');
  }
}
