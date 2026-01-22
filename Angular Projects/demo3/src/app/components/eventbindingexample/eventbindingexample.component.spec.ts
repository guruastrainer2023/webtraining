import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingexampleComponent } from './eventbindingexample.component';

describe('EventbindingexampleComponent', () => {
  let component: EventbindingexampleComponent;
  let fixture: ComponentFixture<EventbindingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventbindingexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbindingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
