import { Component, OnInit } from '@angular/core';
import { ReservaService } from "../services/reserva.service";
import { Reserva } from "../models/reserva";
@Component({
  selector: 'app-consulta-reserva',
  templateUrl: './consulta-reserva.component.html',
  styleUrls: ['./consulta-reserva.component.css']
})
export class ConsultaReservaComponent implements OnInit {
  reservas: Reserva[];
  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaService.getReservas().subscribe(reservas => {
      return this.reservas = reservas;
    });
    }

}
