import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecialidadComponent } from './editar-especialidad.component';

describe('EditarEspecialidadComponent', () => {
  let component: EditarEspecialidadComponent;
  let fixture: ComponentFixture<EditarEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarEspecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
