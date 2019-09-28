import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva';

@Component({
  selector: 'app-registro-reserva',
  templateUrl: './registro-reserva.component.html',
  styleUrls: ['./registro-reserva.component.css']
})
export class RegistroReservaComponent implements OnInit {
  reserva: Reserva;
  reservas: Reserva[];
  constructor( private reservaService: ReservaService ) { }


  ngOnInit() {
    this.reserva={id:0,Nombre:'',TipoSilla: false,NumeroSilla:''}
    console.log('se inicializa la reserva')
  }

  

  add(){
    
    if(!this.reserva){return;}
    this.reservaService.add(this.reserva).subscribe(reserva =>{ alert('se agrego un nuevo vuelo =>' + reserva.id);
    });
  }
  title = 'nuevoP';

}
