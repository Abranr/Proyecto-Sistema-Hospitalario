import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRecursosComponent } from './consultar-recursos.component';

describe('ConsultarRecursosComponent', () => {
  let component: ConsultarRecursosComponent;
  let fixture: ComponentFixture<ConsultarRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
