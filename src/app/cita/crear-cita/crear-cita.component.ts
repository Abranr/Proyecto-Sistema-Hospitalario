import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'; /* 
import { AppServerModule } from '../../app.module.server'; */
import {Cita} from '../../modelos/cita.module'
import { AppService } from '../../app.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearComponent {

  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}

  CrearCita = new FormGroup({
    idMedico : new FormControl(null, Validators.required),
    idPaciente : new FormControl(null, Validators.required),
    idHorario : new FormControl(null, Validators.required),
    estado : new FormControl('', Validators.required)
  });

  enviarForm() {
    const formValue: Cita = {
      idMedico: this.CrearCita.value.idMedico ?? null,
      idPaciente: this.CrearCita.value.idPaciente ?? null,
      idHorario: this.CrearCita.value.idHorario ?? null,
      estado: this.CrearCita.value.estado || null
    };

    this.appService.postCita(formValue).subscribe({
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
