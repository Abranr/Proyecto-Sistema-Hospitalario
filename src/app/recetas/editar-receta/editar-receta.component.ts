import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrl: './editar-receta.component.css'
})
export class EditarRecetaComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  citas: any [] =[];
  receta: any;
  formValue: any;
  id =this.activeRouter.snapshot.paramMap.get('id');
  ngOnInit(){
    this.consultarCitas();
    this.appService.getRecetId(this.id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.receta = data[0];
        this.editarReceta.setValue({
          idCita: this.receta.idCita, 
          descripcion: this.receta.descripcion,
        })
        
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }


  editarReceta = new FormGroup({
    idCita : new FormControl(),
    descripcion : new FormControl(),
 });
 
 enviarForm() {
   this.formValue = {
    idCita: this.editarReceta.value.idCita,
    descripcion: this.editarReceta.value.descripcion,
   };
   
   this.appService.putReceta(this.id, this.formValue).subscribe({
     next: (response) => {
         console.log('Receta creada:', response);
         alert('Receta creada');
     },
     error: (err) => {
         console.error('Error al crear receta:', err);
         console.log(this.formValue);
         // Mostrar mensaje de error al usuario
       }
     });
 }

  

  consultarCitas(){
    this.appService.getCitas().subscribe(
      (data: any[]) => {
        console.log(data);
        this.citas = data;
        
      },
      (error: any) => {
        console.error('Error al obtener salas:', error);
      }
    );
  }
  eliminar(id: any){
    if (confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
    console.log('eliminar: ' ,id);
    this.appService.eliminarReceta(id, this.formValue).subscribe({
      next: (response) => {
        console.log('Item eliminado:', response);
        this.editarReceta.reset();
        this.router.navigate(['inicio/consultar-receta']);
      },
      error: (error) => {
        console.error('Error al eliminar el item:', error);
        alert('Error al eliminar receta');
      }
    });
  }}
}
