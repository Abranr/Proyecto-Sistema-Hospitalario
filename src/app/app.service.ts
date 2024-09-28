import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'http://localhost:6500/'; 
  private apiUrlcita = 'http://localhost:6500/citas'; 
  private apiUrlcitas = 'http://localhost:6500/citas/'; 
  constructor(private http: HttpClient) { }

  // Método para obtener pacientes
  getConsulta(consulta: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+consulta);
  }
  getCitaId( id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ 'citas/'+id);
  }
  getCitaPacienteId( id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ 'citas/citaPaciente/'+id);
  }
  getUsuarioId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"usuarios/"+id);
  }
  getEspecialidadId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"especialidad/"+id);
  }
  getSalaId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"salas/"+id);
  }
  getHistorialId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"historial/" +id);
  }
  getMedicoId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"medicos/"+id);
  }
  getHorarioId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"horarios/"+id);
  }
  getRecetId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"recetas/"+id);
  }
  getMedicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"medicos/consultarMedico");
  } //medicos
  getSalas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"salas");
  }
  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"horarios/obtenerHorarios");
  }
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +"usuarios");
  }
  getEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + "especialidad");
  }
  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ "citas/obtenerCitas");
  }
  getPacientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ "usuarios/pacientes");
  }
  getDatosRol(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ "usuarios/usuariosRol/1");
  }
  getHistorial(){
    return this.http.get<any[]>(this.apiUrl+ "historial/historialMedico/1");
  }
  
  getHorarioCita(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ "citas/obtenerHorarios/" + id);
  }
  getRecetas(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl+ "recetas/obtenerRecetas");
}



  postHorario(form: any):Observable<any>{
    return this.http.post<any[]>(this.apiUrl + "horarios", form)
  }
  postCita(form: any):Observable<any>{
    return this.http.post<any[]>(this.apiUrl + "citas", form)
  }
  postSala(form: any):Observable<any>{
    return this.http.post<any[]>(this.apiUrl + "salas", form)
  }
  postEspecialidad(form: any):Observable<any>{
    return this.http.post<any[]>(this.apiUrl + "especialidad", form)
  }

  postUsuario(form: any){
    return this.http.post<any[]>(this.apiUrl + "usuarios", form)
  }
  postReceta(form: any){
    return this.http.post<any[]>(this.apiUrl + "recetas", form)
  }
  postMedico(form: any){
    return this.http.post<any[]>(this.apiUrl + "medicos", form)
  }

  postHistorial(form: any){
    return this.http.post<any[]>(this.apiUrl + "historial/1", form)
  }

  putCita(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrlcitas + id, form)
  } 
  putUsuario(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'usuarios/' + id, form)
  } 

  putEspecialidad(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'especialidad/' + id, form)
  } 
  
  putSala(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'salas/' + id, form)
  } 
  putMedico(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'medicos/' + id, form)
  } 
  putHorario(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'horarios/' + id, form)
  } 
  putReceta(id: any, form: any):Observable<any>{
    return this.http.put<any[]>(this.apiUrl+'recetas/' + id, form)
  } 

  putHistorial(){

  }

  eliminarCita(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "citas/" + id, Options);
  }

  eliminarPaciente(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "usuarios/" + id, Options);
  }

  eliminarEspecialidad(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "especialidad/" + id, Options);
  }

  
  eliminarSala(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "salas/" + id, Options);
  }

  eliminarMedico(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "medicos/" + id, Options);
  }


  eliminarHorario(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "horarios/" + id, Options);
  }

  eliminarReceta(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "recetas/" + id, Options);
  }

  eliminarHistorial(id: any, form: any){
    let Options={
      headers: new HttpHeaders({
        'Conten-type': 'application/json' 
      }),
      body: form
    }
    return this.http.delete<any[]>(this.apiUrl + "historial/" + id, Options);
  }
}
