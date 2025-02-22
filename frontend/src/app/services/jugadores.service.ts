import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  private apiUrl = 'http://localhost:3000/api/players'; 

  constructor(private http: HttpClient) { } 


  obtenerJugadores(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerJugadorPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
}