import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDestinoComponent } from './mostrar-destino.component';

describe('MostrarDestinoComponent', () => {
  let component: MostrarDestinoComponent;
  let fixture: ComponentFixture<MostrarDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarDestinoComponent]
    });
    fixture = TestBed.createComponent(MostrarDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
