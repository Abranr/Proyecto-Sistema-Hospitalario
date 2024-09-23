import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMedicosComponent } from './consultar-medicos.component';

describe('ConsultarMedicosComponent', () => {
  let component: ConsultarMedicosComponent;
  let fixture: ComponentFixture<ConsultarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
