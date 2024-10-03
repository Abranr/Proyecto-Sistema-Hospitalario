import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ApiService } from '../../login/service/api.service';

@Component({
  selector: 'app-consultas-anteriores',
  templateUrl: './consultas-anteriores.component.html',
  styleUrl: './consultas-anteriores.component.css'
})
export class ConsultasAnterioresComponent {
  constructor(private appService: AppService, private router: Router, private api: ApiService
  ){}
  historiales: any[] = [];
  user: any;
  ngOnInit(){

    this.user = this.api.getUser();

      if (this.user) {
        console.log('Objeto user recibido:', this.user);
        } else {
           console.error('No se encontró el objeto user en el servicio');
        }

        this.verificarRol(this.user.idRol);
    }

  


    verificarRol(idRol: any){
      if(idRol === 1){
        this.appService.getHistorialPaciente(this.user.idUsuario).subscribe(
          (data: any[]) => {
            console.log(data);
            this.historiales = data;
            
          },
          (error: any) => {
            console.error('Error al obtener usuarios:', error);
          }
        );
      }      
      else{
        this.appService.getHistorial().subscribe(
          (data: any[]) => {
            console.log(data);
            this.historiales = data;
            
          },
          (error: any) => {
            console.error('Error al obtener usuarios:', error);
          }
        );
      }
    }
    editar(id:any){
      this.router.navigate(['inicio/editar-historial/', id])
    }
}
