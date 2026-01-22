import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingexampleComponent } from './propertybindingexample.component';

describe('PropertybindingexampleComponent', () => {
  let component: PropertybindingexampleComponent;
  let fixture: ComponentFixture<PropertybindingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybindingexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertybindingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
