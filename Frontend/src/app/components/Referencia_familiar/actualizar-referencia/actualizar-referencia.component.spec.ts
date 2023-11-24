import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReferenciaComponent } from './actualizar-referencia.component';

describe('ActualizarReferenciaComponent', () => {
  let component: ActualizarReferenciaComponent;
  let fixture: ComponentFixture<ActualizarReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarReferenciaComponent]
    });
    fixture = TestBed.createComponent(ActualizarReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
