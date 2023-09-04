import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavbarAvatarComponent } from './second-navbar-avatar.component';

describe('SecondNavbarAvatarComponent', () => {
  let component: SecondNavbarAvatarComponent;
  let fixture: ComponentFixture<SecondNavbarAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondNavbarAvatarComponent]
    });
    fixture = TestBed.createComponent(SecondNavbarAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
