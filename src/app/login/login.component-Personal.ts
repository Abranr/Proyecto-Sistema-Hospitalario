import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './service/api.service';
import { LoginI } from '../modelos/login.interface';
import { Router } from '@angular/router';
import { PacienteI } from '../modelos//paciente.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
//Esta es la logica de el inicio de sesion 
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  //Esta sera la variable que guarde el objeto Usuario
  loginResponse: any;

  constructor(private api: ApiService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onLogin() {
    const formValue = this.loginForm.value;
    const loginData: LoginI = {
      username: formValue.username ?? '',
      password: formValue.password ?? ''
    };
    this.api.loginByEmail(loginData).subscribe(
      data => {
        this.loginResponse = data;
        console.log(this.loginResponse);

        // Asumiendo que numero es `idRol` esta parte lo respondera 
        const userRole = this.loginResponse.idRol;

        // Esta parte redireccionara al rol asignado 
        switch (userRole) {
          case 1:
            this.router.navigate(['/paciente-dashboard']);
            break;
          case 2:
            this.router.navigate(['/admin-dashboard']);
            break;
          case 3:
            this.router.navigate(['/doctor-dashboard']);
            break;
          default:
            console.error('Rol no reconocido');
        }
      },
      error => {
        console.error('Error al iniciar sesión', error);
      }
    );
  }
//Aca comienza la logica de la inscripcion del usuario 
  nuevoForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    dpi: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    email: ['', Validators.required],
    numero: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
    idRol: ['1', Validators.pattern('^[0-9]*$')], // Solo números
    estado: ['1', Validators.required]
  });

  postForm(form: FormGroup) {
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
      idRol: 1,
      estado: 1
    };

    this.api.postPaciente(pacienteData).subscribe(data => {
      console.log(data);
    });
  }

}
