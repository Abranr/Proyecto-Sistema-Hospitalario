import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrl: './agregar-receta.component.css'
})
export class AgregarRecetaComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  citas: any [] =[];
 
  crearReceta = new FormGroup({
    idCita : new FormControl('', Validators.required),
    descripcion : new FormControl('', Validators.required),
 });
 
 enviarForm() {
   const formValue = {
    idCita: this.crearReceta.value.idCita,
    descripcion: this.crearReceta.value.descripcion,
   };
   
   this.appService.postReceta(formValue).subscribe({
     next: (response) => {
         console.log('Receta creada:', response);
         alert('Receta creada');
     },
     error: (err) => {
         console.error('Error al crear receta:', err);
         console.log(formValue);
         // Mostrar mensaje de error al usuario
       }
     });
 }
 
 
  
         ngOnInit(){
           this.consultarCitas();
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
}
