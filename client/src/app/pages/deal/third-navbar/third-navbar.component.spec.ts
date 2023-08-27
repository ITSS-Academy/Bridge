import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdNavbarComponent } from './third-navbar.component';

describe('ThirdNavbarComponent', () => {
  let component: ThirdNavbarComponent;
  let fixture: ComponentFixture<ThirdNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdNavbarComponent]
    });
    fixture = TestBed.createComponent(ThirdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
