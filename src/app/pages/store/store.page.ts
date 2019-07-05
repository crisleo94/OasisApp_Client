import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

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
