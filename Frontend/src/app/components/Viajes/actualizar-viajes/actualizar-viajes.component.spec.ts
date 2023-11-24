import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarViajesComponent } from './actualizar-viajes.component';

describe('ActualizarViajesComponent', () => {
  let component: ActualizarViajesComponent;
  let fixture: ComponentFixture<ActualizarViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarViajesComponent]
    });
    fixture = TestBed.createComponent(ActualizarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
