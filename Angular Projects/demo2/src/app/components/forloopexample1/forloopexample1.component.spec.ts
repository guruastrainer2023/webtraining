import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forloopexample1Component } from './forloopexample1.component';

describe('Forloopexample1Component', () => {
  let component: Forloopexample1Component;
  let fixture: ComponentFixture<Forloopexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Forloopexample1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forloopexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
