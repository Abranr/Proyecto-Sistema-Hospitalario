import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-recurso',
  templateUrl: './editar-recurso.component.html',
  styleUrl: './editar-recurso.component.css'
})
export class EditarRecursoComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}

  salas: any;
  formValue: any;
  id =this.activeRouter.snapshot.paramMap.get('id');

  ngOnInit(){

    this.appService.getSalaId(this.id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.salas = data[0];
        this.editarRecurso.setValue({
          nivel: this.salas.nivel,
        })
        
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  editarRecurso = new FormGroup({
    nivel : new FormControl(),
  });
  
  enviarForm() {
    this.formValue = {
     nivel: this.editarRecurso.value.nivel ?? null
   };
   
   console.log(this.formValue);
   this.appService.putSala(this.id, this.formValue).subscribe({
     next: (response) => {
         console.log('Recurso actualizado:', response);
         alert('Recurso actualizado');
     },
     error: (err) => {
         console.error('Error al actualizar recurso:', err);
        
     }
 });
 }

 eliminar(id: any){
  if (confirm('¿Estás seguro de que quieres eliminar esta sala?')) {
  console.log('eliminar: ' ,id);
  this.appService.eliminarSala(id, this.formValue).subscribe({
    next: (response) => {
      console.log('Item eliminado:', response);
      this.editarRecurso.reset();
      this.router.navigate(['consultar-recursos']);
    },
    error: (error) => {
      console.error('Error al eliminar el item:', error);
      alert('Error al eliminar sala');
    }
  });
  
}}


}


