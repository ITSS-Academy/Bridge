import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHaveDataContactsComponent } from './display-have-data-contacts.component';

describe('DisplayHaveDataContactsComponent', () => {
  let component: DisplayHaveDataContactsComponent;
  let fixture: ComponentFixture<DisplayHaveDataContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayHaveDataContactsComponent]
    });
    fixture = TestBed.createComponent(DisplayHaveDataContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
