import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.page.html',
  styleUrls: ['./recieved.page.scss'],
})
export class RecievedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tiendaPuntos() {
    this.router.navigateByUrl('/');
    console.log('Ha seleccionado la tienda puntos');
  }

}
