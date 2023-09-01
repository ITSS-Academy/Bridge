import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWContentComponent } from './page-w-content.component';

describe('PageWContentComponent', () => {
  let component: PageWContentComponent;
  let fixture: ComponentFixture<PageWContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWContentComponent],
    });
    fixture = TestBed.createComponent(PageWContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
