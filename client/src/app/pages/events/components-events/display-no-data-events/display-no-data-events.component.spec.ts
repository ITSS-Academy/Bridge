import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoDataEventsComponent } from './display-no-data-events.component';

describe('DisplayNoDataEventsComponent', () => {
  let component: DisplayNoDataEventsComponent;
  let fixture: ComponentFixture<DisplayNoDataEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayNoDataEventsComponent]
    });
    fixture = TestBed.createComponent(DisplayNoDataEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
