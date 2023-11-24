import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarViajeroComponent } from './eliminar-viajero.component';

describe('EliminarViajeroComponent', () => {
  let component: EliminarViajeroComponent;
  let fixture: ComponentFixture<EliminarViajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarViajeroComponent]
    });
    fixture = TestBed.createComponent(EliminarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
