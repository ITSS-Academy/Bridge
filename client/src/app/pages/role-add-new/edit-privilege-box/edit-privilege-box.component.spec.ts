import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrivilegeBoxComponent } from './edit-privilege-box.component';

describe('EditPrivilegeBoxComponent', () => {
  let component: EditPrivilegeBoxComponent;
  let fixture: ComponentFixture<EditPrivilegeBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrivilegeBoxComponent]
    });
    fixture = TestBed.createComponent(EditPrivilegeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
