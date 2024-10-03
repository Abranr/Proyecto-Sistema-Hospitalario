import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-horario',
  templateUrl: './formulario-horario.component.html',
  styleUrl: './formulario-horario.component.css'
})
export class FormularioHorarioComponent {

 constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
 medicos: any [] =[];
 salas: any [] =[];

 CrearHorario = new FormGroup({
  idMedico : new FormControl(null, Validators.required),
  idSala : new FormControl(null, Validators.required),
});

enviarForm() {
  const formValue = {
    idMedico: this.CrearHorario.value.idMedico ?? null,
    idSala: this.CrearHorario.value.idSala ?? null,
  };
  
  console.log('id medico:' + this.CrearHorario.value.idMedico),
  console.log('id sala:' + this.CrearHorario.value.idSala)
  this.appService.postHorario(formValue).subscribe({
    next: (response) => {
        console.log('Horario creado:', response);
        alert('Horario agregado');
        // Redirigir o mostrar mensaje de éxito
    },
    error: (err) => {
        console.error('Error al crear horario:', err);
        // Mostrar mensaje de error al usuario
      }
    });
}


 
        ngOnInit(){
          this.consultarMedicos();
          this.consultarSalas();
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

        consultarSalas(){
          this.appService.getSalas().subscribe(
            (data: any[]) => {
              console.log(data);
              this.salas = data;
              
            },
            (error: any) => {
              console.error('Error al obtener salas:', error);
            }
          );
        }

          


         
}
