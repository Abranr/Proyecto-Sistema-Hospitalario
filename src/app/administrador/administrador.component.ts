import { Component } from '@angular/core';
import { AppServerModule } from '../app.module.server';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  constructor(private appService: AppService) {
    console.log("El cliente ha sido iniciado") 

  }

  /* cita: any [] =[];
   ngOnInit(): void {
      this.appService.getPacientes().subscribe(
        (data: any[]) => {
          console.log(data);
          this.cita = data;
          
        },
        (error: any) => { 
         // console.error('Error al obtener usuarios:', error);
        }
     );} 
 */
}
