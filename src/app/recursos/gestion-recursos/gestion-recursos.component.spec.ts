import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRecursosComponent } from './gestion-recursos.component';

describe('GestionRecursosComponent', () => {
  let component: GestionRecursosComponent;
  let fixture: ComponentFixture<GestionRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
