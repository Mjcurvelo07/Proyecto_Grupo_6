import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarViajeroComponent } from './actualizar-viajero.component';

describe('ActualizarViajeroComponent', () => {
  let component: ActualizarViajeroComponent;
  let fixture: ComponentFixture<ActualizarViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarViajeroComponent]
    });
    fixture = TestBed.createComponent(ActualizarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
