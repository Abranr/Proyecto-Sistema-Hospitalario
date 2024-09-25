import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-especialidad',
  templateUrl: './editar-especialidad.component.html',
  styleUrl: './editar-especialidad.component.css'
})
export class EditarEspecialidadComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  id =this.activeRouter.snapshot.paramMap.get('id');
  especialidad: any;
  formValue: any;
  ngOnInit(){

    this.appService.getEspecialidadId(this.id).subscribe(
          (data: any[]) => {
            console.log(data);
            this.especialidad = data[0];
            this.editarEspecialidad.setValue({
              nombre: this.especialidad.nombre,
            })
            
          },
          (error: any) => {
            console.error('Error al obtener usuarios:', error);
          }
        );
      }
    
      editarEspecialidad = new FormGroup({
      nombre : new FormControl(),
    });
  
    enviarForm() {
      this.formValue = {
       nombre: this.editarEspecialidad.value.nombre ?? null,
     };
     
     console.log(this.formValue);
     this.appService.putEspecialidad(this.id, this.formValue).subscribe({
       next: (response) => {
           console.log('Especialidad actualizada:', response);
           alert('Especialidad actualizada');
       },
       error: (err) => {
           console.error('Error al actualizar especialidad:', err);
       }
   });
   }
   
   eliminar(id: any){
    if (confirm('¿Estás seguro de que quieres eliminar esta especialidad?')) {
    console.log('eliminar: ' ,id);
    this.appService.eliminarEspecialidad(id, this.formValue).subscribe({
      next: (response) => {
        console.log('Item eliminado:', response);
        this.editarEspecialidad.reset();
        this.router.navigate(['consultar-especialidad']);
      },
      error: (error) => {
        console.error('Error al eliminar el item:', error);
        alert('Error al eliminar especialidad');
      }
    });
  }}

}
