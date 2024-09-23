import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMedicosComponent } from './principal-medicos.component';

describe('PrincipalMedicosComponent', () => {
  let component: PrincipalMedicosComponent;
  let fixture: ComponentFixture<PrincipalMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
