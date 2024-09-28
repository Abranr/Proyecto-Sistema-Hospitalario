import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-historial',
  templateUrl: './agregar-historial.component.html',
  styleUrl: './agregar-historial.component.css'
})
export class AgregarHistorialComponent {
  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  citas: any [] =[];
  pacientes: any [] =[];


  agregarHistorial = new FormGroup({
    idPaciente : new FormControl(null, Validators.required),
    idCita : new FormControl(null, Validators.required),
  });


  enviarForm() {
    const formValue = {
      idPaciente: this.agregarHistorial.value.idPaciente ?? null,
      idCita: this.agregarHistorial.value.idCita ?? null,
    };
    
    console.log('id paciente:' + this.agregarHistorial.value.idPaciente),
    console.log('id cita:' + this.agregarHistorial.value.idCita)
    this.appService.postHistorial(formValue).subscribe({
      next: (response) => {
          console.log('Historial agregado:', response);
          alert("Historial agregado.");
          this.agregarHistorial.reset();
      },
      error: (err) => {
          console.error('Error al agregar historial', err);
          
        }
      });
  }

ngOnInit(){
  this.consultarPacientes();
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
      
        this.agregarHistorial.patchValue({ idCita: null }); 
        this.citas = [];
      }
    );
}

   
}
