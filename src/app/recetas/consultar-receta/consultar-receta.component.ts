import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../login/service/api.service';

@Component({
  selector: 'app-consultar-receta',
  templateUrl: './consultar-receta.component.html',
  styleUrl: './consultar-receta.component.css'
})
export class ConsultarRecetaComponent {
  constructor(private appService: AppService, private route: Router,private api: ApiService ){}
  recetas: any[]=[];
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





  editar(id:any){
    this.route.navigate(['inicio/editar-receta/', id])
  }


  verificarRol(idRol: any){
    if(idRol === 1){
      this.appService.getRecetaPaciente(this.user.idUsuario).subscribe(
        (data: any[]) => {
          console.log(data);
          this.recetas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
    }
   else{
      this.appService.getRecetas().subscribe(
        (data: any[]) => {
          console.log(data);
          this.recetas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener recetas:', error);
        }
      );
    }
  }
}

