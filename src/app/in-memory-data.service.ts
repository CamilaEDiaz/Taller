import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reserva } from "./models/reserva";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    const reserva = [
      {id: 1065845791, Nombre: 'Camila Espinosa', TipoSilla: 'ejecutiva', NumeroSilla: 12},
      {id: 1066789542, Nombre: 'Jose Dussan', TipoSilla: 'ejecutiva', NumeroSilla: 15},
      {id: 1067895334, Nombre: 'Jefferson Ruiz', TipoSilla: 'ejecutiva', NumeroSilla: 2}
    ];
    return {reserva};
    
  }
 
  genId(reserva: Reserva[]): number{
    return reserva.length > 0 ? Math.max(...reserva.map(Reserva => Reserva.id)) + 1 : 11;
  }
  
}
