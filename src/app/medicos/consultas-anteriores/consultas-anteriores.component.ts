import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas-anteriores',
  templateUrl: './consultas-anteriores.component.html',
  styleUrl: './consultas-anteriores.component.css'
})
export class ConsultasAnterioresComponent {
  constructor(private appService: AppService, private router: Router){}
  historiales: any[] = [];
  ngOnInit(){
    this.appService.getHistorial().subscribe(
      (data: any[]) => {
        console.log(data);
        this.historiales = data;
        
      },
      (error: any) => {
        console.error('Error al obtener historiales:', error);
      }
    );}


    editar(id:any){
      this.router.navigate(['editar-historial/', id])
    }
}