import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHistorialComponent } from './editar-historial.component';

describe('EditarHistorialComponent', () => {
  let component: EditarHistorialComponent;
  let fixture: ComponentFixture<EditarHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarHistorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
