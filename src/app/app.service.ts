import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from './modelos/cita.module';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'http://localhost:6500/'; 
  private apiUrlcita = 'http://localhost:6500/citas'; 
  private apiUrlcitas = 'http://localhost:6500/citas/'; 
  constructor(private http: HttpClient) { }

  // Método para obtener pacientes
  getPacientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getConsulta(consulta: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+consulta);
  }

 /*  getCitaId( id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlcita +id);
  } */
  getCitaId( id: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlcitas +id);
  }
  postCita(form: Cita):Observable<any>{
    return this.http.post<any[]>(this.apiUrlcita, form)
  }
  putCita(id: any, form: Cita):Observable<any>{
    return this.http.put<any[]>(this.apiUrlcitas + id, form)
  }
}
