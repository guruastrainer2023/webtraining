import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifexample3Component } from './ifexample3.component';

describe('Ifexample3Component', () => {
  let component: Ifexample3Component;
  let fixture: ComponentFixture<Ifexample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ifexample3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifexample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
