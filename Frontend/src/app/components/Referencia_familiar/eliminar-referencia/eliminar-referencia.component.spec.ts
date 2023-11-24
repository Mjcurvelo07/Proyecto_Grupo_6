import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReferenciaComponent } from './eliminar-referencia.component';

describe('EliminarReferenciaComponent', () => {
  let component: EliminarReferenciaComponent;
  let fixture: ComponentFixture<EliminarReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarReferenciaComponent]
    });
    fixture = TestBed.createComponent(EliminarReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
