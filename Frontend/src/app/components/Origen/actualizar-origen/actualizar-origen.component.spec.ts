import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrigenComponent } from './actualizar-origen.component';

describe('ActualizarOrigenComponent', () => {
  let component: ActualizarOrigenComponent;
  let fixture: ComponentFixture<ActualizarOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarOrigenComponent]
    });
    fixture = TestBed.createComponent(ActualizarOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
