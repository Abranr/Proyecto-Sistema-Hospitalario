import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPacienteComponent } from './formulario-paciente.component';

describe('FormularioPacienteComponent', () => {
  let component: FormularioPacienteComponent;
  let fixture: ComponentFixture<FormularioPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
