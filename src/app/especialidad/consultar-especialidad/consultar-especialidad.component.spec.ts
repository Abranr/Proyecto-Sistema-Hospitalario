import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEspecialidadComponent } from './consultar-especialidad.component';

describe('ConsultarEspecialidadComponent', () => {
  let component: ConsultarEspecialidadComponent;
  let fixture: ComponentFixture<ConsultarEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
