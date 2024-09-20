import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './cita/crear-cita/crear-cita.component';
import { EditarCitaComponent } from './cita/editar-cita/editar-cita.component';

const routes: Routes = [
  { path: 'agregar-cita', component: CrearComponent },
  { path: 'editar-cita/:id', component: EditarCitaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
