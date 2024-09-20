import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCitaComponent } from './eliminar-cita.component';

describe('EliminarCitaComponent', () => {
  let component: EliminarCitaComponent;
  let fixture: ComponentFixture<EliminarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
