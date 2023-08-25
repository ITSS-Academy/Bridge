import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformationComponent } from './form-information.component';

describe('FormInformationComponent', () => {
  let component: FormInformationComponent;
  let fixture: ComponentFixture<FormInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInformationComponent]
    });
    fixture = TestBed.createComponent(FormInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
