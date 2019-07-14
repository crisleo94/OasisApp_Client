import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  fuenteHora = new BehaviorSubject('Hora por defecto');
  horaCompartida = this.fuenteHora.asObservable();

  constructor() {
   }

   cambiaHora(hora: string) {
     this.fuenteHora.next(hora);
  }
}
