import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeinput1Component } from './employeeinput1.component';

describe('Employeeinput1Component', () => {
  let component: Employeeinput1Component;
  let fixture: ComponentFixture<Employeeinput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Employeeinput1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeeinput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
