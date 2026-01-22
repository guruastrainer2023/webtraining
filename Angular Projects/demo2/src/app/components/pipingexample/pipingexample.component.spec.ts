import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingexampleComponent } from './pipingexample.component';

describe('PipingexampleComponent', () => {
  let component: PipingexampleComponent;
  let fixture: ComponentFixture<PipingexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipingexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipingexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
