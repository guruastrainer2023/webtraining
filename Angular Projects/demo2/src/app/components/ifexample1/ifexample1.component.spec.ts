import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifexample1Component } from './ifexample1.component';

describe('Ifexample1Component', () => {
  let component: Ifexample1Component;
  let fixture: ComponentFixture<Ifexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ifexample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
