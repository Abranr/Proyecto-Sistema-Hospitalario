import { Component } from '@angular/core';
import { AppService } from '../../app.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrl: './consultar-cita.component.css'
})
export class ConsultarCitaComponent {
  constructor(private appService: AppService, private router: Router) {
    console.log("El cliente ha sido iniciado")

  }

  citas: any [] =[];
  ngOnInit(): void {
      this.appService.getCitas().subscribe(
        (data: any[]) => {
          console.log(data);
          this.citas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
    }

      
      editar(id: any){
        this.router.navigate(['editar-cita/', id])
      
      }
    }

