import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOrigenComponent } from './mostrar-origen.component';

describe('MostrarOrigenComponent', () => {
  let component: MostrarOrigenComponent;
  let fixture: ComponentFixture<MostrarOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarOrigenComponent]
    });
    fixture = TestBed.createComponent(MostrarOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
