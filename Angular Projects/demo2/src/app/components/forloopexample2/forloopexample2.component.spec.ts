import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forloopexample2Component } from './forloopexample2.component';

describe('Forloopexample2Component', () => {
  let component: Forloopexample2Component;
  let fixture: ComponentFixture<Forloopexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Forloopexample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forloopexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
