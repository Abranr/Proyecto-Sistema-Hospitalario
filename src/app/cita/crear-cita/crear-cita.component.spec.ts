import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComponent } from './crear-cita.component';

describe('CrearCitaComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
