import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppServerModule } from './app.module.server';
import { HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { AppService } from './app.service';
import { CrearComponent } from './cita/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './cita/editar-cita/editar-cita.component';
import { ConsultarCitaComponent } from './cita/consultar-cita/consultar-cita.component';
import { ConsultasAnterioresComponent } from './medicos/consultas-anteriores/consultas-anteriores.component';
import { GestionarHorariosComponent } from './horarios/gestionar-horarios/gestionar-horarios.component';
import { VisualizacionReservasComponent } from './reservas/visualizacion-reservas/visualizacion-reservas.component';
import { GestionRecursosComponent } from './recursos/gestion-recursos/gestion-recursos.component';
import { PanelDeControlComponent } from './panel de control/panel-de-control/panel-de-control.component';
import { PrincipalMedicosComponent } from './medicos/principal-medicos/principal-medicos.component';
import { FormularioHorarioComponent } from './horarios/formulario-horario/formulario-horario.component';
import { FormularioMedicoComponent } from './medicos/Formularios/formulario-medico/formulario-medico.component';
import { FormularioPacienteComponent } from './medicos/Formularios/formulario-paciente/formulario-paciente.component';
import { MedicosEspecialidadesComponent } from './medicos/medicos-especialidades/medicos-especialidades.component';
import { ConsultarHorarioComponent } from './horarios/consultar-horario/consultar-horario.component';
import { ConsultarUsuariosComponent } from './medicos/Formularios/consultar-usuarios/consultar-usuarios.component';
import { ConsultarRecursosComponent } from './recursos/consultar-recursos/consultar-recursos.component';
import { ConsultarEspecialidadComponent } from './especialidad/consultar-especialidad/consultar-especialidad.component';
import { AgregarEspecialidadComponent } from './especialidad/agregar-especialidad/agregar-especialidad.component';
import { EditarEspecialidadComponent } from './especialidad/editar-especialidad/editar-especialidad.component';
import { AgregarRecetaComponent } from './recetas/agregar-receta/agregar-receta.component';
import { ConsultarRecetaComponent } from './recetas/consultar-receta/consultar-receta.component';
import { EditarRecetaComponent } from './recetas/editar-receta/editar-receta.component';
import { EditarPacienteComponent } from './medicos/Formularios/editar-paciente/editar-paciente.component';
import { EditarRecursoComponent } from './recursos/editar-recurso/editar-recurso.component';
import { EditarMedicoComponent } from './medicos/Formularios/editar-medico/editar-medico.component';
import { PrincipalAdminComponent } from './principal-admin/principal-admin.component';
import { AgregarHistorialComponent } from './medicos/agregar-historial/agregar-historial.component';
import { EditarHistorialComponent } from './medicos/editar-historial/editar-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,AdministradorComponent,
    CrearComponent,
    EditarCitaComponent,
    ConsultarCitaComponent,
    ConsultasAnterioresComponent,
    GestionarHorariosComponent,
    VisualizacionReservasComponent,
    GestionRecursosComponent,
    PanelDeControlComponent,
    PrincipalMedicosComponent,
    FormularioHorarioComponent,
    FormularioMedicoComponent,
    FormularioPacienteComponent,
    MedicosEspecialidadesComponent,
    ConsultarHorarioComponent,
    ConsultarUsuariosComponent,
    ConsultarRecursosComponent,
    ConsultarEspecialidadComponent,
    AgregarEspecialidadComponent,
    EditarEspecialidadComponent,
    AgregarRecetaComponent,
    ConsultarRecetaComponent,
    EditarRecetaComponent,
    EditarPacienteComponent,
    EditarRecursoComponent,
    EditarMedicoComponent,
    PrincipalAdminComponent,
    AgregarHistorialComponent,
    EditarHistorialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
