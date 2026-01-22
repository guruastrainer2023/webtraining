import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInput1Component } from './person-input1.component';

describe('PersonInput1Component', () => {
  let component: PersonInput1Component;
  let fixture: ComponentFixture<PersonInput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonInput1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
