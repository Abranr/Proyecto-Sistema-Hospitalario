import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEspecialidadComponent } from './agregar-especialidad.component';

describe('AgregarEspecialidadComponent', () => {
  let component: AgregarEspecialidadComponent;
  let fixture: ComponentFixture<AgregarEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
