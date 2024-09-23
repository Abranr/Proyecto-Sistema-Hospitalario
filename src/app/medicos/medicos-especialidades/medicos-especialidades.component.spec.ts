import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEspecialidadesComponent } from './medicos-especialidades.component';

describe('MedicosEspecialidadesComponent', () => {
  let component: MedicosEspecialidadesComponent;
  let fixture: ComponentFixture<MedicosEspecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicosEspecialidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicosEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
