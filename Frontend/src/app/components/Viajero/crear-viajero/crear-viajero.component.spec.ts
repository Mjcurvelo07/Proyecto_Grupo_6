import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajeroComponent } from './crear-viajero.component';

describe('CrearViajeroComponent', () => {
  let component: CrearViajeroComponent;
  let fixture: ComponentFixture<CrearViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearViajeroComponent]
    });
    fixture = TestBed.createComponent(CrearViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
