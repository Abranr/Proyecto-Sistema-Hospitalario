import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApiService } from './service/api.service';
import { LoginI } from '../modelos/login.interface';
import { Router } from '@angular/router';
import { PacienteI } from '../modelos/paciente.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Esta es la lógica del inicio de sesión
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  onLogin() {
    const formValue = this.loginForm.value;
    const loginData: LoginI = {
      username: formValue.username ?? '',
      password: formValue.password ?? '',
      
    };


    console.log(this.loginForm.value);
    console.log(loginData);
    this.api.loginByEmail(loginData).subscribe(
      (data) => {
        let user = data;
        let userRole = user.idRol;
        console.log(user.username, userRole);

        // Redirigir según el rol
        switch (userRole) {
          case 1:
            console.log('Paciente');
            break;
          case 2:
            console.log('Admin');
            break;
          case 3:
            console.log('Doctor');
            break;
          default:
            console.error('Rol no reconocido');
            break;
        }
      },
      (error) => {
        console.log('Error al iniciar sesión', error);
      }
    );
  }
  // Método para verificar si un campo está inválido y se ha tocado
  isFieldInvalid(field: string): boolean {
    return (
      this.nuevoForm.get(field)!.invalid &&
      (this.nuevoForm.get(field)!.dirty || this.nuevoForm.get(field)!.touched)
    );
  }

  // Variable para almacenar el mensaje de error del username
  usernameError: string = '';

  // Formulario para la inscripción de un nuevo usuario
  nuevoForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    dpi: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]], // Validación para correos electrónicos
    numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
    idRol: ['1', Validators.pattern('^[0-9]*$')], // Por defecto idRol = 1
    estado: ['1', Validators.required], // Por defecto estado = 1
  });

  // Método para manejar el formulario de inscripción
  postForm(form: FormGroup) {
    // Verifica si el formulario es válido
    if (this.nuevoForm.invalid) {
      // Si hay campos inválidos, no procedemos
      this.markAllFieldsAsTouched();
      return;
    }
    const formValue = form.value;
    const pacienteData: PacienteI = {
      username: formValue.username,
      password: formValue.password,
      dpi: formValue.dpi,
      nombres: formValue.nombres,
      apellidos: formValue.apellidos,
      fechaNacimiento: formValue.fechaNacimiento,
      email: formValue.email,
      numero: formValue.numero,
      idRol: formValue.idRol,
      estado: formValue.estado,
    };

    // Llamada al servicio para registrar el paciente
    this.api.postPaciente(pacienteData).subscribe(
      (data) => {
        console.log('El objeto usuario se guardó correctamente:', data);
        this.usernameError = ''; // Limpiar el error si la inscripción es exitosa
      },
      (error) => {
        if (error.status === 409) {
          // Si el nombre de usuario ya existe
          this.usernameError =
            'El nombre de usuario ya existe. Por favor, elige otro.';
          // Mostrar la ventana modal
        } else {
          console.error('Error al guardar el objeto usuario:', error);
          this.usernameError = 'Ocurrió un error al registrar el usuario.';
          // Mostrar la ventana modal
        }
      }
    );
  }

  // Método para marcar todos los campos como tocados si hay errores
  private markAllFieldsAsTouched() {
    Object.keys(this.nuevoForm.controls).forEach((field) => {
      const control = this.nuevoForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}