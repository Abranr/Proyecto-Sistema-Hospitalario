import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRecursoComponent } from './editar-recurso.component';

describe('EditarRecursoComponent', () => {
  let component: EditarRecursoComponent;
  let fixture: ComponentFixture<EditarRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarRecursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
