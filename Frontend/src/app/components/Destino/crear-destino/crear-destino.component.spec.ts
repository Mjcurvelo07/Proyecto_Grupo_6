import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDestinoComponent } from './crear-destino.component';

describe('CrearDestinoComponent', () => {
  let component: CrearDestinoComponent;
  let fixture: ComponentFixture<CrearDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDestinoComponent]
    });
    fixture = TestBed.createComponent(CrearDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
