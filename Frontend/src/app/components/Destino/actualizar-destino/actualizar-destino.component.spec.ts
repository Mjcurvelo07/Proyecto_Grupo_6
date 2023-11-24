import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDestinoComponent } from './actualizar-destino.component';

describe('ActualizarDestinoComponent', () => {
  let component: ActualizarDestinoComponent;
  let fixture: ComponentFixture<ActualizarDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDestinoComponent]
    });
    fixture = TestBed.createComponent(ActualizarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
