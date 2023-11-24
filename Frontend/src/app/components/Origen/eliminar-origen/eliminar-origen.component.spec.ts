import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarOrigenComponent } from './eliminar-origen.component';

describe('EliminarOrigenComponent', () => {
  let component: EliminarOrigenComponent;
  let fixture: ComponentFixture<EliminarOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarOrigenComponent]
    });
    fixture = TestBed.createComponent(EliminarOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
