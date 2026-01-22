import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingexampleComponent } from './classbindingexample.component';

describe('ClassbindingexampleComponent', () => {
  let component: ClassbindingexampleComponent;
  let fixture: ComponentFixture<ClassbindingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassbindingexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassbindingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
