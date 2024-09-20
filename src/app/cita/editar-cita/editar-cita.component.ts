import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Cita } from '../../modelos/cita.module';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrl: './editar-cita.component.css'
})
export class EditarCitaComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  cita: Cita | undefined;
   id = 1;
  ngOnInit(){
  //let id = this.activeRouter.snapshot.paramMap.get('id');
  
  console.log('prueba de un id que saber de donde sale', this.id);
  this.appService.getCitaId(this.id).subscribe(
        (data: Cita[]) => {
          console.log(data);
          this.cita = data[0];
          this.editarCita.setValue({
            idMedico: this.cita.idMedico, 
            idPaciente: this.cita.idPaciente,
            idHorario: this.cita.idHorario,
            estado: this.cita.estado || null
          })
          
        },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
    }
  
    editarCita = new FormGroup({
    idMedico : new FormControl(),
    idPaciente : new FormControl(),
    idHorario : new FormControl(),
    estado : new FormControl('', Validators.required)
  });

  enviarForm() {
    const formValue: Cita = {
      idMedico: this.editarCita.value.idMedico ?? null,
      idPaciente: this.editarCita.value.idPaciente ?? null,
      idHorario: this.editarCita.value.idHorario ?? null,
      estado: this.editarCita.value.estado || null
    };
    
    console.log(formValue);
    this.appService.putCita(this.id, formValue).subscribe({
      next: (response) => {
          console.log('Cita creada:', response);
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al crear cita:', err);
          // Mostrar mensaje de error al usuario
      }
  });
  }
}
