import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavbarMainComponent } from './sub-navbar-main.component';

describe('SubNavbarMainComponent', () => {
  let component: SubNavbarMainComponent;
  let fixture: ComponentFixture<SubNavbarMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubNavbarMainComponent]
    });
    fixture = TestBed.createComponent(SubNavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
