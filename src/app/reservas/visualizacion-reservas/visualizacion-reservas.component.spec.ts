import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionReservasComponent } from './visualizacion-reservas.component';

describe('VisualizacionReservasComponent', () => {
  let component: VisualizacionReservasComponent;
  let fixture: ComponentFixture<VisualizacionReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizacionReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacionReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
