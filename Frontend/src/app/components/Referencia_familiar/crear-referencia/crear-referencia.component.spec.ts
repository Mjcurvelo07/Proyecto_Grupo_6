import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReferenciaComponent } from './crear-referencia.component';

describe('CrearReferenciaComponent', () => {
  let component: CrearReferenciaComponent;
  let fixture: ComponentFixture<CrearReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReferenciaComponent]
    });
    fixture = TestBed.createComponent(CrearReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
