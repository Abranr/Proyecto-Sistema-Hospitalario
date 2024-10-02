import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos-especialidades',
  templateUrl: './medicos-especialidades.component.html',
  styleUrl: './medicos-especialidades.component.css'
})
export class MedicosEspecialidadesComponent {
  constructor(private appService: AppService, private router: Router){}
  medicos: any[] = [];
  ngOnInit(){
    this.appService.getMedicos().subscribe(
      (data: any[]) => {
        console.log(data);
        this.medicos = data;
        
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );}

    editar(id: any){
      this.router.navigate(['inicio/editar-medico/', id])
    }
}
