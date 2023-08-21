import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGroupComponent } from './display-group.component';

describe('DisplayGroupComponent', () => {
  let component: DisplayGroupComponent;
  let fixture: ComponentFixture<DisplayGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGroupComponent]
    });
    fixture = TestBed.createComponent(DisplayGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
