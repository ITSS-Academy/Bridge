import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEventsComponent } from './navbar-events.component';

describe('NavbarEventsComponent', () => {
  let component: NavbarEventsComponent;
  let fixture: ComponentFixture<NavbarEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarEventsComponent]
    });
    fixture = TestBed.createComponent(NavbarEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
