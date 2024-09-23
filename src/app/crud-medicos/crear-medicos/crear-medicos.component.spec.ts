import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMedicosComponent } from './crear-medicos.component';

describe('CrearMedicosComponent', () => {
  let component: CrearMedicosComponent;
  let fixture: ComponentFixture<CrearMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
