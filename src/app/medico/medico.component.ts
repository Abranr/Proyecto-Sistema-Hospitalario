import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AppServerModule } from '../app.module.server';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {
  constructor(private appService: AppServerModule) {
    console.log("El cliente ha sido iniciado")
}
cita: any [] =[];


    
ngOnInit(): void {
    this.appService.getCitas().subscribe(
      (data: any[]) => {
        console.log(data);
        this.cita = data;
        
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  
  }
}
