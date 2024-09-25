import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRecetaComponent } from './consultar-receta.component';

describe('ConsultarRecetaComponent', () => {
  let component: ConsultarRecetaComponent;
  let fixture: ComponentFixture<ConsultarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
