import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Reserva} from "./models/reserva";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroReservaComponent } from './registro-reserva/registro-reserva.component';
import { ConsultaReservaComponent } from './consulta-reserva/consulta-reserva.component';
import { FormsModule } from '@angular/forms';
import { ReservaService } from './services/reserva.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistroReservaComponent,
    ConsultaReservaComponent,
    MessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [ReservaService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
