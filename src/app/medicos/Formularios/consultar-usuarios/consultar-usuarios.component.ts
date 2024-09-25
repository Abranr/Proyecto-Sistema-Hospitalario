import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrl: './consultar-usuarios.component.css'
})
export class ConsultarUsuariosComponent {

  constructor(private appService: AppService, private router: Router){}
  usuarios: any[] = [];
  ngOnInit(){
    this.appService.getUsuarios().subscribe(
      (data: any[]) => {
        console.log(data);
        this.usuarios = data;
        
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  editar(id: any){
    this.router.navigate(['editar-usuario/', id]);
  }
    
}
