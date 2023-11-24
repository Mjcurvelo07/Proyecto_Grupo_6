import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarViajeroComponent } from './mostrar-viajero.component';

describe('MostrarViajeroComponent', () => {
  let component: MostrarViajeroComponent;
  let fixture: ComponentFixture<MostrarViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarViajeroComponent]
    });
    fixture = TestBed.createComponent(MostrarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
