import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteI } from '../modelos/paciente.interface';
import { ApiService } from '../login/service/api.service';

@Component({
  selector: 'app-principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrl: './principal-admin.component.css'
})
export class PrincipalAdminComponent  implements OnInit  {
user: any;   
constructor(private route: ActivatedRoute, private router: Router, private api: ApiService){
}
/* user: any =this.route.snapshot.paramMap.get('user'); */
/* ngOnInit(): void {

    const navigation = this.router.getCurrentNavigation();
    this.user = navigation?.extras?.state?.['user'];

    if (this.user) {
      console.log('Objeto user recibido:', this.user);
    } else {
      console.error('No se recibió el objeto user');
    }
  } */

    ngOnInit(): void {
      // Obtén el objeto user desde el servicio
      this.user = this.api.getUser();
  
      if (this.user) {
        console.log('Objeto user recibido:', this.user);
      } else {
        console.error('No se encontró el objeto user en el servicio');
      }
    }
  citas(){
    this.router.navigate(['inicio/consultar-cita']);
    console.log(this.router);
  }
  pacientes(){
    this.router.navigate(['inicio/consultar-usuario']);
  }
  salas(){
    this.router.navigate(['inicio/consultar-recursos']);
  }
  horarios(){
    this.router.navigate(['inicio/consultar-horario']);
  }
  recetas(){
    this.router.navigate(['inicio/consultar-receta']);
  }
  medicos(){
    this.router.navigate(['inicio/consultar-medico']);
  }
}

