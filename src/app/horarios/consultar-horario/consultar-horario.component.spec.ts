import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHorarioComponent } from './consultar-horario.component';

describe('ConsultarHorarioComponent', () => {
  let component: ConsultarHorarioComponent;
  let fixture: ComponentFixture<ConsultarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarHorarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
