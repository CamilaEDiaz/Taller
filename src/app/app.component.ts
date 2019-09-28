import { Component, OnInit } from '@angular/core';
import{ Reserva} from './models/reserva';
import { from } from 'rxjs';
import { ReservaService } from './services/reserva.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reservas: Reserva[];
  constructor(private reservaService: ReservaService){}
  
  ngOnInit(){
    this.getReservas();
  }

  getReservas(){
    this.reservaService.getReservas().subscribe(reservas => this.reservas= reservas);
  }


}
