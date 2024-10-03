import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestionar-horarios',
  templateUrl: './gestionar-horarios.component.html',
  styleUrl: './gestionar-horarios.component.css'
})
export class GestionarHorariosComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  medicos: any [] =[];
  salas: any [] =[];
  horarios: any;
  id =this.activeRouter.snapshot.paramMap.get('id');
  formValue: any;
  ngOnInit(){
    
    this.consultarMedicos();
    this.consultarSalas();
    this.appService.getHorarioId(this.id).subscribe(
          (data: any[]) => {
            console.log(data);
            this.horarios = data[0];
            this.editarHorario.setValue({
              idMedico: this.horarios.idMedico,
              idSala: this.horarios.idSala
            })
            
          },
          (error: any) => {
            console.error('Error al obtener medicos:', error);
          }
        );
      }

  editarHorario = new FormGroup({
    idMedico : new FormControl(),
    idSala : new FormControl(),
  });
  
  enviarForm() {
    this.formValue = {
      idMedico: this.editarHorario.value.idMedico ?? null,
      idSala: this.editarHorario.value.idSala ?? null,
    };
    console.log(this.formValue);
     this.appService.putHorario(this.id, this.formValue).subscribe({
       next: (response) => {
           console.log('Horario actualizado:', response);
           alert('Horario actualizado');
       },
       error: (err) => {
           console.error('Error al actualizar horario:', err);
       }
   });
  }
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

    consultarSalas(){
      this.appService.getSalas().subscribe(
        (data: any[]) => {
          console.log(data);
          this.salas = data;
          
        },
        (error: any) => {
          console.error('Error al obtener salas:', error);
        }
      );
    }


    eliminar(id: any){
      if (confirm('¿Estás seguro de que quieres eliminar este horario?')) {
      console.log('eliminar: ' ,id);
      this.appService.eliminarHorario(id, this.formValue).subscribe({
        next: (response) => {
          console.log('Item eliminado:', response);
          this.editarHorario.reset();
          this.router.navigate(['inicio/consultar-horario']);
        },
        error: (error) => {
          console.error('Error al eliminar el item:', error);
          alert('Error al eliminar horario');
        }
      });
    }}
}
