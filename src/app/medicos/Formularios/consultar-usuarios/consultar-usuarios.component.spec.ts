import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUsuariosComponent } from './consultar-usuarios.component';

describe('ConsultarUsuariosComponent', () => {
  let component: ConsultarUsuariosComponent;
  let fixture: ComponentFixture<ConsultarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
