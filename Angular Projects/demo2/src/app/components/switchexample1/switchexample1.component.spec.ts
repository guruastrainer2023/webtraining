import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchexample1Component } from './switchexample1.component';

describe('Switchexample1Component', () => {
  let component: Switchexample1Component;
  let fixture: ComponentFixture<Switchexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Switchexample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
