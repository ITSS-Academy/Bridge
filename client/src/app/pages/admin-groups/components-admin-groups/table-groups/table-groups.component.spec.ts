import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGroupsComponent } from './table-groups.component';

describe('TableGroupsComponent', () => {
  let component: TableGroupsComponent;
  let fixture: ComponentFixture<TableGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGroupsComponent]
    });
    fixture = TestBed.createComponent(TableGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
