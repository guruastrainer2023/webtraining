import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ifexample2Component } from './ifexample2.component';

describe('Ifexample2Component', () => {
  let component: Ifexample2Component;
  let fixture: ComponentFixture<Ifexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ifexample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ifexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
