import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMedicoComponent } from './formulario-medico.component';

describe('FormularioMedicoComponent', () => {
  let component: FormularioMedicoComponent;
  let fixture: ComponentFixture<FormularioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
