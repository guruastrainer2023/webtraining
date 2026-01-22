import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchexample2Component } from './switchexample2.component';

describe('Switchexample2Component', () => {
  let component: Switchexample2Component;
  let fixture: ComponentFixture<Switchexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Switchexample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
