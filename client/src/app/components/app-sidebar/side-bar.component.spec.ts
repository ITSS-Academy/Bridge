import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: AppSideBarComponent;
  let fixture: ComponentFixture<AppSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSideBarComponent]
    });
    fixture = TestBed.createComponent(AppSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
