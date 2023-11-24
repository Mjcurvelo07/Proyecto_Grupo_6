import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrigenComponent } from './crear-origen.component';

describe('CrearOrigenComponent', () => {
  let component: CrearOrigenComponent;
  let fixture: ComponentFixture<CrearOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearOrigenComponent]
    });
    fixture = TestBed.createComponent(CrearOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
