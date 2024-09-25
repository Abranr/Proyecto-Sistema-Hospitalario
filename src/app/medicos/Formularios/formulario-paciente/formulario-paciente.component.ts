import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrl: './formulario-paciente.component.css'
})
export class FormularioPacienteComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}

  CrearUsuario = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    dpi : new FormControl(null, Validators.required),
    nombres : new FormControl('', Validators.required),
    apellidos : new FormControl('', Validators.required),
    fechaNacimiento : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    numero : new FormControl('', Validators.required),
    idRol : new FormControl('', Validators.required)
  });

  enviarForm() {
    const formValue = {
      username: this.CrearUsuario.value.username,
      password: this.CrearUsuario.value.password,
      dpi: this.CrearUsuario.value.dpi,
      nombres: this.CrearUsuario.value.nombres,
      apellidos: this.CrearUsuario.value.apellidos,
      fechaNacimiento: this.CrearUsuario.value.fechaNacimiento,
      email: this.CrearUsuario.value.email,
      numero: this.CrearUsuario.value.numero,
      idRol: this.CrearUsuario.value.idRol,
      estado: 1

    };

    this.appService.postUsuario(formValue).subscribe({
      next: (response) => {
        console.log(formValue);
          console.log('Usuario creado:', response);
          alert('Usuario creado');
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al crear usuario:', err)
          alert('Error al crear usuario, favor valide todos los campos.')
          console.log(formValue);
          // Mostrar mensaje de error al usuario
      }
  });
  this.CrearUsuario.reset();
  }

}