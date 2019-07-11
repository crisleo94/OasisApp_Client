import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BDService {

  API_URI = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getPedido(IDPedido: string) {
    return this.http.get(`${this.API_URI}/pedido/${IDPedido}`);
  }

  postUserData(user: UsuarioModel) {
    return this.http.post(`${this.API_URI}/pedido/`, user);
  }

  getProductos() {
    return this.http.get(`${this.API_URI}/`);
  }

}
