import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../../modelos/login.interface';
import { PacienteI } from '../../modelos/paciente.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'http://localhost:6500';

  constructor(private http: HttpClient) {}

  loginByEmail(form:LoginI):Observable<any>{
    let direccion = this.url+'/usuarios/login';
    return this.http.post(direccion, form);
  }
  

  postPaciente(form: PacienteI): Observable<any> {
    let direccion = this.url + '/usuarios';
    return this.http.post(direccion, form);
  }
}
