import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  private fuenteHora = new BehaviorSubject('defaultHora');
  horaSeleccionada = this.fuenteHora.asObservable();

  constructor() {
   }

   cambiaHora(hora: string) {
      this.fuenteHora.next(hora);
  }
}
