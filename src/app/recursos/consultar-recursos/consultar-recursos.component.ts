import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-recursos',
  templateUrl: './consultar-recursos.component.html',
  styleUrl: './consultar-recursos.component.css'
})
export class ConsultarRecursosComponent {

    constructor(private appService: AppService, private route : Router){}
    salas: any[] = [];
    ngOnInit(){
      this.appService.getSalas().subscribe(
        (data: any[]) => {
          console.log(data);
          this.salas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener salas:', error);
        }
      );}

      editar(id:any){
        this.route.navigate(['inicio/editar-recurso/', id])
      }
}
