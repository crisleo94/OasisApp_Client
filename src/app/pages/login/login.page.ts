import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: {
    mail: 'prueba@prueba.com',
    pass: 'prueba123'
  };


  constructor() { }

  ngOnInit() {
  }

  login(user: object) {
    
  }

}
