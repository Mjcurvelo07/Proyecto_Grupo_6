import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDestinoComponent } from './eliminar-destino.component';

describe('EliminarDestinoComponent', () => {
  let component: EliminarDestinoComponent;
  let fixture: ComponentFixture<EliminarDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarDestinoComponent]
    });
    fixture = TestBed.createComponent(EliminarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
