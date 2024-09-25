import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; 
import { AppService } from '../../app.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearComponent {

  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  medicos: any [] =[];
  pacientes: any [] =[];
  horarios: any [] =[];

  CrearCita = new FormGroup({
    idMedico : new FormControl(null, Validators.required),
    idPaciente : new FormControl(null, Validators.required),
    idHorario : new FormControl(null, Validators.required),
    fechaCita: new FormControl('', Validators.required),
    estado : new FormControl('', Validators.required)
  });

  enviarForm() {
    const formValue = {
      idMedico: this.CrearCita.value.idMedico ?? null,
      idPaciente: this.CrearCita.value.idPaciente ?? null,
      idHorario: this.CrearCita.value.idHorario ?? null,
      fechaCita: this.CrearCita.value.fechaCita ?? null,
      estado: this.CrearCita.value.estado || null
    };

    this.appService.postCita(formValue).subscribe({
      next: (response) => {
          console.log('Cita creada:', response);
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al crear cita:', err);
          console.log(formValue);
          // Mostrar mensaje de error al usuario
      }
  });
  }
ngOnInit(){
           this.consultarMedicos();
           this.consultarPacientes();
           this.consultarHorarios();
         }
 
       consultarMedicos(){
         this.appService.getMedicos().subscribe(
           (data: any[]) => {
             console.log(data);
             this.medicos = data;
             
           },
           (error: any) => {
             console.error('Error al obtener medicos:', error);
           }
         );}
 
         consultarPacientes(){
           this.appService.getPacientes().subscribe(
             (data: any[]) => {
               console.log(data);
               this.pacientes = data;
               
             },
             (error: any) => {
               console.error('Error al obtener pacientes:', error);
             }
           );
          }
         
           consultarHorarios(){
            this.appService.getHorarioCita().subscribe(
              (data: any[]) => {
                console.log(data);
                this.horarios = data;
                
              },
              (error: any) => {
                console.error('Error al obtener pacientes:', error);
              }
            );
          }
 
  

        }