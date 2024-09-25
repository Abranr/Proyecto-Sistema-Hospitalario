import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrl: './editar-medico.component.css'
})
export class EditarMedicoComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  medicos: any [] =[];
  especialidades: any [] =[];
  medico: any;
  id =this.activeRouter.snapshot.paramMap.get('id');
  formValue: any;

  ngOnInit(){
    
    this.consultarEspecialidades();
    this.consultarMedicos();
    this.appService.getMedicoId(this.id).subscribe(
          (data: any[]) => {
            console.log(data);
            this.medico = data[0];
            this.editarMedico.setValue({
              idEspecialidad: this.medico.idEspecialidad,
              idUsuario: this.medico.idMedico
            })
            
          },
          (error: any) => {
            console.error('Error al obtener medicos:', error);
          }
        );
      }
    
      editarMedico= new FormGroup({
        idEspecialidad :new FormControl(),
        idUsuario:new FormControl(),
    });
  
    enviarForm() {
      this.formValue = {
       idEspecialidad: this.editarMedico.value.idEspecialidad ?? null,
       idUsuario: this.editarMedico.value.idUsuario ?? null
     };
     
     console.log(this.formValue);
     this.appService.putMedico(this.id, this.formValue).subscribe({
       next: (response) => {
           console.log('Medico actualizado:', response);
           alert('Medico actualizada');
       },
       error: (err) => {
           console.error('Error al actualizar medico:', err);
       }
   });
   }
   
   eliminar(id: any){
    if (confirm('¿Estás seguro de que quieres eliminar este médico?')) {
    console.log('eliminar: ' ,id);
    this.appService.eliminarMedico(id, this.formValue).subscribe({
      next: (response) => {
        console.log('Item eliminado:', response);
        this.editarMedico.reset();
        this.router.navigate(['consultar-medico']);
      },
      error: (error) => {
        console.error('Error al eliminar el item:', error);
        alert('Error al eliminar medico');
      }
    });
  }}


  consultarMedicos(){
    this.appService.getMedicos().subscribe(
      (data: any[]) => {
        console.log(data);
        this.medicos = data;
        
      },
      (error: any) => {
        console.error('Error al obtener medicos:', error);
      }
    );}

    consultarEspecialidades(){
      this.appService.getEspecialidades().subscribe(
        (data: any[]) => {
          console.log(data);
          this.especialidades = data;
          
        },
        (error: any) => {
          console.error('Error al obtener salas:', error);

        }
      );
    }
}
