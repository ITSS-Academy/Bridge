import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleView2Component } from './role-view2.component';

describe('RoleView2Component', () => {
  let component: RoleView2Component;
  let fixture: ComponentFixture<RoleView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleView2Component]
    });
    fixture = TestBed.createComponent(RoleView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
