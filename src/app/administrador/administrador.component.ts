import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServerModule } from '../app.module.server';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { ApiService } from '../login/service/api.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  user: any;

  constructor(
    private api: ApiService,
    private router: Router
  ) {
    console.log("El cliente ha sido iniciado");
  }

  ngOnInit() {
    this.user = this.api.getUser();

    if (this.user) {
      console.log('Objeto user recibido:', this.user);
    } else {
      console.error('No se encontró el objeto user en el servicio');
    }
  }

  cerrarSesion() {
    // Limpiar localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    // Limpiar sessionStorage si lo usas
    sessionStorage.clear();

    // Limpiar la variable user
    this.user = null;

    // Redirigir al login
    this.router.navigate(['/login']);

    console.log('Sesión cerrada exitosamente');
  }
}
