import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrl: './principal-admin.component.css'
})
export class PrincipalAdminComponent {
constructor(private router: Router){}
  citas(){
    this.router.navigate(['consultar-cita']);
    console.log(this.router);
  }
  pacientes(){
    this.router.navigate(['consultar-usuario']);
  }
  salas(){
    this.router.navigate(['consultar-recursos']);
  }
  horarios(){
    this.router.navigate(['consultar-horario']);
  }
  recetas(){
    this.router.navigate(['consultar-receta']);
  }
  medicos(){
    this.router.navigate(['consultar-medico']);
  }
}

