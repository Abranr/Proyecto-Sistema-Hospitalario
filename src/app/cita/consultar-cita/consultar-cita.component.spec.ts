import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCitaComponent } from './consultar-cita.component';

describe('ConsultarCitaComponent', () => {
  let component: ConsultarCitaComponent;
  let fixture: ComponentFixture<ConsultarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
