import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserManagementComponent } from './navbar-user-management.component';

describe('NavbarUserManagementComponent', () => {
  let component: NavbarUserManagementComponent;
  let fixture: ComponentFixture<NavbarUserManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarUserManagementComponent]
    });
    fixture = TestBed.createComponent(NavbarUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
