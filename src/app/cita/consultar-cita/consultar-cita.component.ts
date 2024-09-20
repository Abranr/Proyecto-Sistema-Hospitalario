import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrl: './consultar-cita.component.css'
})
export class ConsultarCitaComponent {
  constructor(private appService: AppService) {
    console.log("El cliente ha sido iniciado")

  }

  citas: any [] =[];
  ngOnInit(): void {
      this.appService.getConsulta("cita/citas").subscribe(
        (data: any[]) => {
          console.log(data);
          this.citas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );}
}
