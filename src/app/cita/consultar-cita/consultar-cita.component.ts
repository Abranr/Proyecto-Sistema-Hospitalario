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
          this.appService.getCitasIdMedico(this.user.idUsuario).subscribe(
            (data: any[]) => {
              console.log(data);
              this.citas = data;
              
            },
            (error: any) => {
              console.error('Error al obtener usuarios:', error);
            }
          );
        }
        if (idRol === 1){
          this.appService.getCitasIdPaciente(this.user.idUsuario).subscribe(
            (data: any[]) => {
              console.log(data);
              this.citas = data;
              
            },
            (error: any) => {
              console.error('Error al obtener usuarios:', error);
            }
          );
        }
      }
    }

