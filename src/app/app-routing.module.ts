import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaReservaComponent } from './consulta-reserva/consulta-reserva.component';
import { RegistroReservaComponent } from './registro-reserva/registro-reserva.component';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'consultaReserva',
    component: ConsultaReservaComponent
  },
  {
    path:'registroReserva',
    component: RegistroReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
