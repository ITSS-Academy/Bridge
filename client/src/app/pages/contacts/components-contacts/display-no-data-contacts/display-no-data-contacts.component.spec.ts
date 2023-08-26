import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoDataContactsComponent } from './display-no-data-contacts.component';

describe('DisplayNoDataContactsComponent', () => {
  let component: DisplayNoDataContactsComponent;
  let fixture: ComponentFixture<DisplayNoDataContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayNoDataContactsComponent]
    });
    fixture = TestBed.createComponent(DisplayNoDataContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
