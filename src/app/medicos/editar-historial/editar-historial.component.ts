import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-historial',
  templateUrl: './editar-historial.component.html',
  styleUrl: './editar-historial.component.css'
})
export class EditarHistorialComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  citas: any [] =[];
  pacientes: any [] =[];
  historial: any;
  id =this.activeRouter.snapshot.paramMap.get('id');
  formValue: any;

  editarHistorial = new FormGroup({
    idPaciente : new FormControl(),
    idCita : new FormControl(),
  });


  enviarForm() {
    const formValue = {
      idPaciente: this.editarHistorial.value.idPaciente ?? null,
      idCita: this.editarHistorial.value.idCita ?? null,
    };
    
    console.log('id paciente:' + this.editarHistorial.value.idPaciente),
    console.log('id cita:' + this.editarHistorial.value.idCita)
    this.appService.postHistorial(formValue).subscribe({
      next: (response) => {
          console.log('Historial actualizado:', response);
          alert('Historial editado');
          // Redirigir o mostrar mensaje de éxito
      },
      error: (err) => {
          console.error('Error al actualizar historial.', err);
          // Mostrar mensaje de error al usuario
        }
      });
  }

  ngOnInit(){
    
    this.consultarPacientes();
    this.consultarCitaEditar();

    this.appService.getHistorialId(this.id).subscribe(
          (data: any[]) => {
            console.log(data);
            this.historial = data[0];
            this.editarHistorial.setValue({
              idCita: this.historial.idCita,
              idPaciente: this.historial.idPaciente
            })
            
          },
          (error: any) => {
            console.error('Error al obtener medicos:', error);
          }
        );
      }


      consultarPacientes(){
        this.appService.getDatosRol().subscribe(
          (data: any[]) => {
            console.log(data);
            this.pacientes = data;
            
          },
          (error: any) => {
            console.error('Error al obtener pacientes:', error);
          }
        );
       }

       eliminar(id: any){
        if (confirm('¿Estás seguro de que quieres eliminar este historial?')) {
        console.log('eliminar: ' ,id);
        this.appService.eliminarHistorial(id, this.formValue).subscribe({
          next: (response) => {
            console.log('Item eliminado:', response);
            alert('Item eliminado')
            this.editarHistorial.reset();
            this.router.navigate(['inicio/consultar-historial']);
          },
          error: (error) => {
            console.error('Error al eliminar el item:', error);
            alert('Error al eliminar horario');
          }
        });
      }}


      consultarCitas(event: Event){
        const pacienteSeleccionado = event.target as HTMLSelectElement;
        const pacienteId = pacienteSeleccionado.value;
        
    
        console.log('ID del paciente seleccionado:', pacienteId);
    
        if (!pacienteId) {
            console.error('No se ha seleccionado ningún paciente.');
            return; 
        }
    
        this.appService.getCitaPacienteId(pacienteId).subscribe(
          (data: any[]) => {
            console.log('Datos de citas:', data); 
            this.citas = data;
          },
          (error: any) => {
            console.error('Error al obtener citas:', error);
          
              this.editarHistorial.patchValue({ idCita: null }); 
              this.citas = [];
          }
        );
    }


    consultarCitaEditar(){
      
      this.appService.getCitas().subscribe(
        (data: any[]) => {
          console.log('Datos de citas:', data); 
          this.citas = data;
        },
        (error: any) => {
          console.error('Error al obtener citas:', error);
      
        }
      );
  }
}
