import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent {


  constructor(private appService: AppService, private activeRouter: ActivatedRoute, private router: Router){}
  usuario: any;
  formValue: any;
  id =this.activeRouter.snapshot.paramMap.get('id');

  ngOnInit(){
    this.appService.getUsuarioId(this.id).subscribe(
      (data: any[]) => {
        console.log(data);
        this.usuario = data[0];
        this.editarUsuario.setValue({
          username: this.usuario.username, 
          password: this.usuario.password,
          dpi: this.usuario.dpi,
          nombres: this.usuario.nombres,
          apellidos: this.usuario.apellidos,
          fechaNacimiento: this.formatFecha(this.usuario.fechaNacimiento),
          email: this.usuario.email,
          numero: this.usuario.numero,
          idRol: this.usuario.idRol

        })
        
      },
      (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
  editarUsuario = new FormGroup({
    username :new FormControl(),
    password : new FormControl(),
    dpi :new FormControl(),
    nombres : new FormControl(),
    apellidos : new FormControl(),
    fechaNacimiento : new FormControl(),
    email : new FormControl(),
    numero : new FormControl(),
    idRol : new FormControl(),
  });

  enviarForm() {
    this.formValue = {
      username: this.editarUsuario.value.username,
      password: this.editarUsuario.value.password,
      dpi: this.editarUsuario.value.dpi,
      nombres: this.editarUsuario.value.nombres,
      apellidos: this.editarUsuario.value.apellidos,
      fechaNacimiento: this.editarUsuario.value.fechaNacimiento,
      email: this.editarUsuario.value.email,
      numero: this.editarUsuario.value.numero,
      idRol: this.editarUsuario.value.idRol,
      estado: 1

    };

    this.appService.putUsuario(this.id, this.formValue).subscribe({
      next: (response) => {
        console.log(this.formValue);
          console.log('Usuario actualizado:', response);
      },
      error: (err) => {
          console.error('Error al actualizar usuario:', err)
          console.log(this.formValue);
      }
  });
  }
  formatFecha(fecha: string): string {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }

  eliminar(id: any){
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
    console.log('eliminar: ' ,id);
    this.appService.eliminarPaciente(id, this.formValue).subscribe({
      next: (response) => {
        console.log('Item eliminado:', response); 
        this.editarUsuario.reset();
        this.router.navigate(['consultar-usuario']);
      },
      error: (error) => {
        console.error('Error al eliminar el item:', error);
        alert('Error al eliminar usuario');
      }
    });
  }}

}
