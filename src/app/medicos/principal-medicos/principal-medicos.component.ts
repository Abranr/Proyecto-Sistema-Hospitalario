import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-medicos',
  templateUrl: './principal-medicos.component.html',
  styleUrls: ['./principal-medicos.component.css']
})
export class PrincipalMedicosComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Componente Principal Médicos iniciado');
  }

  cerrarSesion(): void {
    // Limpiar localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Limpiar sessionStorage si lo usas
    sessionStorage.clear();

    // Redirigir al login
    this.router.navigate(['/login']);

    console.log('Sesión cerrada exitosamente');
  }
}
