import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMedicosComponent } from './eliminar-medicos.component';

describe('EliminarMedicosComponent', () => {
  let component: EliminarMedicosComponent;
  let fixture: ComponentFixture<EliminarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
