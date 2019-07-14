import { ProductoModel } from './../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: ProductoModel;
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }
}
