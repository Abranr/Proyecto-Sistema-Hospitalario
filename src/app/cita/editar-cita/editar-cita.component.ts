import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrl: './editar-cita.component.css'
})
export class EditarCitaComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  cita: any;
  medicos: any [] =[];
  pacientes: any [] =[];
  horarios: any [] =[];
  formValue: any;
  id =this.activeRouter.snapshot.paramMap.get('id');
  ngOnInit(){

  this.consultarHorarios();
  this.consultarPacientes();
  this.consultarMedicos();
  this.appService.getCitaId(this.id).subscribe(
        (data: any[]) => {
          console.log(data);
          this.cita = data[0];
          this.editarCita.setValue({
            idMedico: this.cita.idMedico, 
            idPaciente: this.cita.idPaciente,
            idHorario: this.cita.idHorario,
            fechaCita: this.formatFecha(this.cita.fechaCita),
            estado: this.cita.estado || null
          })
          
        },
        (error: any) => {
          console.error('Error al obtener usuarios:', error);
        }
      );
    }
  
    editarCita = new FormGroup({
    idMedico : new FormControl(),
    idPaciente : new FormControl(),
    idHorario : new FormControl(),
    fechaCita : new FormControl(),
    estado : new FormControl('', Validators.required)
  });

  enviarForm() {
     this.formValue = {
      idMedico: this.editarCita.value.idMedico ?? null,
      idPaciente: this.editarCita.value.idPaciente ?? null,
      idHorario: this.editarCita.value.idHorario ?? null,
      fechaCita: this.editarCita.value.fechaCita ?? null,
      estado: this.editarCita.value.estado || null
    };
    
    console.log(this.formValue);
    this.appService.putCita(this.id, this.formValue).subscribe({
      next: (response) => {
          console.log('Cita actualizada:', response);
          alert('Cita actualizada');
      },
      error: (err) => {
          console.error('Error al actualizar cita:', err);
         
      }
  });
  }

  consultarPacientes(){
    this.appService.getPacientes().subscribe(
      (data: any[]) => {
        console.log(data);
        this.pacientes = data;
        
      },
      (error: any) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
   }
  
    consultarHorarios(){
     this.appService.getHorarioCita().subscribe(
       (data: any[]) => {
         console.log(data);
         this.horarios = data;
         
       },
       (error: any) => {
         console.error('Error al obtener pacientes:', error);
       }
     );
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

    formatFecha(fecha: string): string {
      const date = new Date(fecha);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0'); 
      return `${year}-${month}-${day}`;
    }


    eliminarCita(id: any){
      if (confirm('¿Estás seguro de que quieres eliminar esta cita?')) {
      console.log('eliminar: ' ,id);
      this.appService.eliminarCita(id, this.formValue).subscribe({
        next: (response) => {
          console.log('Item eliminado:', response);
          this.editarCita.reset();
          this.router.navigate(['consultar-cita']);
        },
        error: (error) => {
          console.error('Error al eliminar el item:', error);
          alert('Error al eliminar cita');
        }
      });
    }}
}
