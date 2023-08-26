import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContactsComponent } from './navbar-contacts.component';

describe('NavbarContactsComponent', () => {
  let component: NavbarContactsComponent;
  let fixture: ComponentFixture<NavbarContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarContactsComponent]
    });
    fixture = TestBed.createComponent(NavbarContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
