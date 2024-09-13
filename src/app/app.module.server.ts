import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {

  private apiUrl = 'http://localhost:6500/citas'; // URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener usuarios
  getCitas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
