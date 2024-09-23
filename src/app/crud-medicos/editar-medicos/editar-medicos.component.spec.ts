import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicosComponent } from './editar-medicos.component';

describe('EditarMedicosComponent', () => {
  let component: EditarMedicosComponent;
  let fixture: ComponentFixture<EditarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
