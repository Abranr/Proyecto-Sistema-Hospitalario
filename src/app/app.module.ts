import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AppServerModule } from './app.module.server';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { CrearComponent } from './cita/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './cita/editar-cita/editar-cita.component';
import { EliminarCitaComponent } from './cita/eliminar-cita/eliminar-cita.component';
import { ConsultarCitaComponent } from './cita/consultar-cita/consultar-cita.component';
import { HistorialMedicoComponent } from './medicos/historial-medico/historial-medico.component';
import { ConsultasAnterioresComponent } from './medicos/consultas-anteriores/consultas-anteriores.component';
import { DiagnosticosComponent } from './medicos/diagnosticos/diagnosticos.component';
import { RecetasComponent } from './medicos/recetas/recetas.component';
import { GestionarHorariosComponent } from './horarios/gestionar-horarios/gestionar-horarios.component';
import { VisualizacionReservasComponent } from './reservas/visualizacion-reservas/visualizacion-reservas.component';
import { GestionRecursosComponent } from './recursos/gestion-recursos/gestion-recursos.component';
import { PanelDeControlComponent } from './panel de control/panel-de-control/panel-de-control.component';
import { PrincipalMedicosComponent } from './medicos/principal-medicos/principal-medicos.component';
import { FormularioHorarioComponent } from './horarios/formulario-horario/formulario-horario.component';
import { FormularioMedicoComponent } from './medicos/Formularios/formulario-medico/formulario-medico.component';
import { FormularioPacienteComponent } from './medicos/Formularios/formulario-paciente/formulario-paciente.component';
import { MedicosEspecialidadesComponent } from './medicos/medicos-especialidades/medicos-especialidades.component';
import { PacientesComponent } from './medicos/pacientes/pacientes.component';
import { ConsultarMedicosComponent } from './crud-medicos/consultar-medicos/consultar-medicos.component';
import { CrearMedicosComponent } from './crud-medicos/crear-medicos/crear-medicos.component';
import { EditarMedicosComponent } from './crud-medicos/editar-medicos/editar-medicos.component';
import { EliminarMedicosComponent } from './crud-medicos/eliminar-medicos/eliminar-medicos.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    CrearComponent,
    EditarCitaComponent,
    EliminarCitaComponent,
    ConsultarCitaComponent,
    HistorialMedicoComponent,
    ConsultasAnterioresComponent,
    DiagnosticosComponent,
    RecetasComponent,
    GestionarHorariosComponent,
    VisualizacionReservasComponent,
    GestionRecursosComponent,
    PanelDeControlComponent,
    PrincipalMedicosComponent,
    FormularioHorarioComponent,
    FormularioMedicoComponent,
    FormularioPacienteComponent,
    MedicosEspecialidadesComponent,
    PacientesComponent,
    ConsultarMedicosComponent,
    CrearMedicosComponent,
    EditarMedicosComponent,
    EliminarMedicosComponent,
  ],
  imports: [
    BrowserModule,
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
