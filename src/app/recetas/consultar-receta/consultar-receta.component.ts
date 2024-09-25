import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-receta',
  templateUrl: './consultar-receta.component.html',
  styleUrl: './consultar-receta.component.css'
})
export class ConsultarRecetaComponent {
  constructor(private appService: AppService, private route: Router){}
  recetas: any[]=[];

 
ngOnInit(){

  this.consultarRecetas();
}


  consultarRecetas(){
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


  editar(id:any){
    this.route.navigate(['editar-receta/', id])
  }
}
