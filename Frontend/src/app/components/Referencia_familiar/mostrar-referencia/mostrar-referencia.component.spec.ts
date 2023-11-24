import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReferenciaComponent } from './mostrar-referencia.component';

describe('MostrarReferenciaComponent', () => {
  let component: MostrarReferenciaComponent;
  let fixture: ComponentFixture<MostrarReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarReferenciaComponent]
    });
    fixture = TestBed.createComponent(MostrarReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
