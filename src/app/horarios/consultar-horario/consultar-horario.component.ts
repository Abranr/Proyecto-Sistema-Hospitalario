import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-horario',
  templateUrl: './consultar-horario.component.html',
  styleUrl: './consultar-horario.component.css'
})
export class ConsultarHorarioComponent {
  constructor(private appService: AppService, private router: Router){}
  horarios: any[] = [];
  ngOnInit(){
    this.appService.getHorarios().subscribe(
      (data: any[]) => {
        console.log(data);
        this.horarios = data;
        
      },
      (error: any) => {
        console.error('Error al obtener horarios:', error);
      }
    );}


    editar(id:any){
      this.router.navigate(['inicio/editar-horario/', id])
    }
}
