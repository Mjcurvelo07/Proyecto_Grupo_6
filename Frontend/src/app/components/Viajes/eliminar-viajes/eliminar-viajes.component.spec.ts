import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarViajesComponent } from './eliminar-viajes.component';

describe('EliminarViajesComponent', () => {
  let component: EliminarViajesComponent;
  let fixture: ComponentFixture<EliminarViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarViajesComponent]
    });
    fixture = TestBed.createComponent(EliminarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
