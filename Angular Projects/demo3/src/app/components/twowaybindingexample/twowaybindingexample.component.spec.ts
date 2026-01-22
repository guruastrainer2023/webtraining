import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingexampleComponent } from './twowaybindingexample.component';

describe('TwowaybindingexampleComponent', () => {
  let component: TwowaybindingexampleComponent;
  let fixture: ComponentFixture<TwowaybindingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwowaybindingexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaybindingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
