import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; 
import { AppService } from '../../app.service';
import { PacienteI } from '../../modelos/paciente.interface';
import { ApiService } from '../../login/service/api.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearComponent {
  user: any;  
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router, private api: ApiService){}
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
          alert('Cita creada')
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al crear cita:', err);
          console.log(formValue);
          // Mostrar mensaje de error al usuario
      }
  });
  }
ngOnInit()
{         
   this.user = this.api.getUser();
  
        if (this.user) {
    console.log('Objeto user recibido:', this.user);
  } else {
    console.error('No se encontró el objeto user en el servicio');
  }

           this.consultarMedicos();
           this.consultarPacientes();
           /* this.consultarHorarios(); */
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
         );
        }
 
       /*  consultarMedicosId(){
          this.appService.getMedicosId().subscribe(
            (data: any[]) => {
              console.log(data);
              this.medicos = data;
              
            },
            (error: any) => {
              console.error('Error al obtener medicos:', error);
            }
          );} */
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
         
          horariosMedico(event: Event){
            const medicoSeleccionado = event.target as HTMLSelectElement;
            const medico = medicoSeleccionado.value;
            
            console.log(medico);
            this.appService.getHorarioCita(medico).subscribe(
              (data: any[]) => {
                console.log(data);
                this.horarios = data;
                
              },
              (error: any) => {
                console.error('Error al obtener horarios:', error);
                this.CrearCita.patchValue({ idHorario: null }); 
              this.horarios = [];
              }
            );
          } 


          

        }