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

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  datePipe: any;

  constructor(private api:ApiService, private router: Router, private formBuilder: FormBuilder
   ) {}

  ngOnInit(): void{}

  onLogin() {
    const formValue = this.loginForm.value;
    const loginData: LoginI = {
      username: formValue.username ?? '',
      password: formValue.password ?? ''
    };
    this.api.loginByEmail(loginData).subscribe(data => {
      console.log(data);
    });
  
  }

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
