import { Component } from '@angular/core';
import { AppService } from '../../app.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../login/service/api.service';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrl: './consultar-cita.component.css'
})
export class ConsultarCitaComponent {
  constructor(private appService: AppService, private router: Router, private api: ApiService) {
    
    console.log("El cliente ha sido iniciado")

  }

  citas: any [] =[];
  user: any;  
  ngOnInit(): void {

    this.user = this.api.getUser();
    
        if (this.user) {
        console.log('Objeto user recibido:', this.user);
        } else {
          console.error('No se encontró el objeto user en el servicio');
         }
         this.verificarRol(this.user.idRol);
    } 

   
      
      editar(id: any){
        this.router.navigate(['inicio/editar-cita/', id])
      
      }

      verificarRol(idRol: any){
        if(idRol === 2){
          console.log(this.user.idRol);
          this.appService.getCitas().subscribe(
            (data: any[]) => {
              console.log(data);
              this.citas = data;
              
            },
            (error: any) => {
              console.error('Error al obtener usuarios:', error);
            }
          );
        }if(idRol === 3){
          console.log(this.user.idRol);
          this.appService.getCitasIdMedico(this.user.idUsuario).subscribe(
            (data: any[]) => {
              console.log(data);
              this.citas = data;
            },
            (error: any) => {
              console.error('Error al obtener usuarios:', error);
              alert('Médico no cuenta con citas programadas.')
            }
          );
        }
        if (idRol === 1){
          console.log(this.user.idRol);
          console.log(this.user.idUsuario);
        
          this.appService.getCitasIdPaciente(this.user.idUsuario).subscribe(
            (data: any[]) => {
              console.log(data);
              this.citas = data;
              
            },
            (error: any) => {
              console.error('Error al obtener citas:', error);
              alert('Paciente no cuenta con citas programadas.')
            }
          );
        }
      }
    }

