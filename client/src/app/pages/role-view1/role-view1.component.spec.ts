import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleView1Component } from './role-view1.component';

describe('RoleView1Component', () => {
  let component: RoleView1Component;
  let fixture: ComponentFixture<RoleView1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleView1Component]
    });
    fixture = TestBed.createComponent(RoleView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
