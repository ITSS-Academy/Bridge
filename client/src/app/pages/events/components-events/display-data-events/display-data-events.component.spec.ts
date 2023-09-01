import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataEventsComponent } from './display-data-events.component';

describe('DisplayDataEventsComponent', () => {
  let component: DisplayDataEventsComponent;
  let fixture: ComponentFixture<DisplayDataEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDataEventsComponent]
    });
    fixture = TestBed.createComponent(DisplayDataEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
