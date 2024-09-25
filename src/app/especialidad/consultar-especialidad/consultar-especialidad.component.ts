import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-especialidad',
  templateUrl: './consultar-especialidad.component.html',
  styleUrl: './consultar-especialidad.component.css'
})
export class ConsultarEspecialidadComponent {
  constructor(private appService: AppService, private router: Router){}
  especialidades: any[] = [];
  ngOnInit(){
    this.appService.getEspecialidades().subscribe(
      (data: any[]) => {
        console.log(data);
        this.especialidades = data;
        
      },
      (error: any) => {
        console.error('Error al obtener especialidades:', error);
      }
    );}


    editar(id: any){
      this.router.navigate(['editar-especialidad', id])
    }
}
