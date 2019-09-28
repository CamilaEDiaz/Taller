import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private reservaUrl='api/reserva';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    
    add (reserva: Reserva): Observable<Reserva> {
      return this.http.post<Reserva>(this.reservaUrl, reserva, this.httpOptions).pipe(
        tap((newReserva: Reserva) => this.log(`se agrego la reserva w/ id=${newReserva.id}`)),
        catchError(this.handleError<Reserva>('add'))
      );
    }
 

  /** GET reservas from the server */
  getReservas (): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.reservaUrl)
      .pipe(
        tap(_ => this.log('Consulta de reservas')),
        catchError(this.handleError<Reserva[]>('getReservas', []))
      );
  }

  /** GET reserva by id. Return `undefined` when id not found */
  getReservaNo404<Data>(id: number): Observable<Reserva> {
    const url = `${this.reservaUrl}/?id=${id}`;
    return this.http.get<Reserva[]>(url)
      .pipe(
        map(reservas => reservas[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} reserva id=${id}`);
        }),
        catchError(this.handleError<Reserva>(`getReserva id=${id}`))
      );
  }

  /** GET reserva by id. Will 404 if id not found */
  getReserva(id: number): Observable<Reserva> {
    const url = `${this.reservaUrl}/${id}`;
    return this.http.get<Reserva>(url).pipe(
      tap(_ => this.log(`fetched reserva id=${id}`)),
      catchError(this.handleError<Reserva>(`getReserva id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Reserva[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Reserva[]>(`${this.reservaUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found reservas matching "${term}"`)),
      catchError(this.handleError<Reserva[]>('searchReservas', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ReservaService: ${message}`);
  }
}
