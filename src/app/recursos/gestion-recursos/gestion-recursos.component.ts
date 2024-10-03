import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-recursos',
  templateUrl: './gestion-recursos.component.html',
  styleUrl: './gestion-recursos.component.css'
})
export class GestionRecursosComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}

  CrearSala = new FormGroup({
    nivel : new FormControl(null, Validators.required)
  });

  enviarForm() {
    const formValue = {
      nivel: this.CrearSala.value.nivel ?? null
    };

    this.appService.postSala(formValue).subscribe({
      next: (response) => {
          console.log('Sala creada:', response);
          alert('Sala creada');
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al crear sala:', err);
          // Mostrar mensaje de error al usuario
        }
      });
  }
}
