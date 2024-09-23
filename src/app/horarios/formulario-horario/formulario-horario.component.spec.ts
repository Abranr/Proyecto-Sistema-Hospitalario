import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHorarioComponent } from './formulario-horario.component';

describe('FormularioHorarioComponent', () => {
  let component: FormularioHorarioComponent;
  let fixture: ComponentFixture<FormularioHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioHorarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
