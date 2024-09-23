import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarHorariosComponent } from './gestionar-horarios.component';

describe('GestionarHorariosComponent', () => {
  let component: GestionarHorariosComponent;
  let fixture: ComponentFixture<GestionarHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionarHorariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
