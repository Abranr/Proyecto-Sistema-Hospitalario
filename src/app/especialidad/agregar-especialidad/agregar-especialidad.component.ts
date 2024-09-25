import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-especialidad',
  templateUrl: './agregar-especialidad.component.html',
  styleUrl: './agregar-especialidad.component.css'
})
export class AgregarEspecialidadComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}

  CrearEspecialidad = new FormGroup({
    nombre : new FormControl(null, Validators.required)
  });

  enviarForm() {
    const formValue = {
      nombre: this.CrearEspecialidad.value.nombre ?? null
    };

    this.appService.postEspecialidad(formValue).subscribe({
      next: (response) => {
          console.log('Especialidad creada:', response);
          alert('Especialidad agregada');
      },
      error: (err) => {
          console.error('Error al crear Especialidad:', err);
          // Mostrar mensaje de error al usuario
        }
      });
      this.CrearEspecialidad.reset();
  }
}
