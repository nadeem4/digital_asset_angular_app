import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBankOperationUserPageComponent } from './dashboard-bank-operation-user-page.component';

describe('DashboardBankOperationUserPageComponent', () => {
  let component: DashboardBankOperationUserPageComponent;
  let fixture: ComponentFixture<DashboardBankOperationUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBankOperationUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBankOperationUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
