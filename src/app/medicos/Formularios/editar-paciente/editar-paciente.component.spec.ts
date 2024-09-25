import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPacienteComponent } from './editar-paciente.component';

describe('EditarPacienteComponent', () => {
  let component: EditarPacienteComponent;
  let fixture: ComponentFixture<EditarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
