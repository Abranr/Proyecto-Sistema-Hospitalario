import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-medico',
  templateUrl: './formulario-medico.component.html',
  styleUrl: './formulario-medico.component.css'
})
export class FormularioMedicoComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  medicos: any [] =[];
  especialidades: any [] =[];
 
  CrearMedico = new FormGroup({
    idEspecialidad : new FormControl('', Validators.required),
    idUsuario : new FormControl('', Validators.required),
 });
 
 enviarForm() {
   const formValue = {
    idEspecialidad: this.CrearMedico.value.idEspecialidad,
    idUsuario: this.CrearMedico.value.idUsuario,
   };
   
   console.log('id especialidad:' + this.CrearMedico.value.idEspecialidad),
   console.log('id medico:' + this.CrearMedico.value.idUsuario)
   this.appService.postMedico(formValue).subscribe({
     next: (response) => {
         console.log('Medico creado:', response);
         alert('Medico creado');
     },
     error: (err) => {
         console.error('Error al crear Medico:', err);
         console.log(formValue);
         // Mostrar mensaje de error al usuario
       }
     });
     
     this.CrearMedico.reset();
 }
 
 
  
         ngOnInit(){
           this.consultarMedicos();
           this.consultarEspecialidades();
         }
 
       consultarMedicos(){
         this.appService.getUsuarioMedico().subscribe(
           (data: any[]) => {
             console.log(data);
             this.medicos = data;
             
           },
           (error: any) => {
             console.error('Error al obtener medicos:', error);
           }
         );}
 
         consultarEspecialidades(){
           this.appService.getEspecialidades().subscribe(
             (data: any[]) => {
               console.log(data);
               this.especialidades = data;
               
             },
             (error: any) => {
               console.error('Error al obtener salas:', error);
             }
           );
         }
 
}
