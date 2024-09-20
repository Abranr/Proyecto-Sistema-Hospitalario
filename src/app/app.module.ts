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

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    CrearComponent,
    EditarCitaComponent,
    EliminarCitaComponent,
    ConsultarCitaComponent
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
