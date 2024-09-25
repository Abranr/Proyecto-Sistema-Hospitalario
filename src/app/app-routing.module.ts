import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './cita/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './cita/editar-cita/editar-cita.component';
import { ConsultarCitaComponent } from './cita/consultar-cita/consultar-cita.component';
import { FormularioPacienteComponent } from './medicos/Formularios/formulario-paciente/formulario-paciente.component';
import { EditarPacienteComponent } from './medicos/Formularios/editar-paciente/editar-paciente.component';
import { ConsultarUsuariosComponent } from './medicos/Formularios/consultar-usuarios/consultar-usuarios.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ConsultarEspecialidadComponent } from './especialidad/consultar-especialidad/consultar-especialidad.component';
import { AgregarEspecialidadComponent } from './especialidad/agregar-especialidad/agregar-especialidad.component';
import { EditarEspecialidadComponent } from './especialidad/editar-especialidad/editar-especialidad.component';
import { ConsultarRecursosComponent } from './recursos/consultar-recursos/consultar-recursos.component';
import { GestionRecursosComponent } from './recursos/gestion-recursos/gestion-recursos.component';
import { EditarRecursoComponent } from './recursos/editar-recurso/editar-recurso.component';
import { MedicosEspecialidadesComponent } from './medicos/medicos-especialidades/medicos-especialidades.component';
import { FormularioMedicoComponent } from './medicos/Formularios/formulario-medico/formulario-medico.component';
import { EditarMedicoComponent } from './medicos/Formularios/editar-medico/editar-medico.component';
import { ConsultarHorarioComponent } from './horarios/consultar-horario/consultar-horario.component';
import { FormularioHorarioComponent } from './horarios/formulario-horario/formulario-horario.component';
import { GestionarHorariosComponent } from './horarios/gestionar-horarios/gestionar-horarios.component';
import { ConsultarRecetaComponent } from './recetas/consultar-receta/consultar-receta.component';
import { AgregarRecetaComponent } from './recetas/agregar-receta/agregar-receta.component';
import { EditarRecetaComponent } from './recetas/editar-receta/editar-receta.component';
import { PanelDeControlComponent } from './panel de control/panel-de-control/panel-de-control.component';
import { PrincipalAdminComponent } from './principal-admin/principal-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'agregar-cita', component: CrearComponent },
  { path: 'editar-cita/:id', component: EditarCitaComponent },
  { path: 'consultar-cita', component: ConsultarCitaComponent },
  { path: 'agregar-usuario', component: FormularioPacienteComponent },
  { path: 'editar-usuario/:id', component: EditarPacienteComponent },
  { path: 'consultar-usuario', component: ConsultarUsuariosComponent },
  { path: 'consultar-especialidad', component: ConsultarEspecialidadComponent },
  { path: 'agregar-especialidad', component: AgregarEspecialidadComponent },
  { path: 'editar-especialidad/:id', component: EditarEspecialidadComponent },
  { path: 'consultar-recursos', component: ConsultarRecursosComponent },
  { path: 'agregar-recurso', component: GestionRecursosComponent },
  { path: 'editar-recurso/:id', component: EditarRecursoComponent },
  { path: 'consultar-medico', component: MedicosEspecialidadesComponent },
  { path: 'agregar-medico', component: FormularioMedicoComponent },
  { path: 'editar-medico/:id', component: EditarMedicoComponent },
  { path: 'consultar-horario', component: ConsultarHorarioComponent },
  { path: 'agregar-horario', component: FormularioHorarioComponent },
  { path: 'editar-horario/:id', component: GestionarHorariosComponent },
  { path: 'consultar-receta', component: ConsultarRecetaComponent },
  { path: 'agregar-receta', component: AgregarRecetaComponent },
  { path: 'editar-receta/:id', component: EditarRecetaComponent },
  { path: 'inicio', component: PrincipalAdminComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
