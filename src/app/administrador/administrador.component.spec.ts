import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../app.component';
import { AdministradorComponent } from './administrador.component';
import { PacienteComponent } from '../paciente/paciente.component';

describe('AdministradorComponent', () => {
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
