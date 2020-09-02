import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCentralBankCustomerPageComponent } from './dashboard-central-bank-customer-page.component';

describe('DashboardCentralBankCustomerPageComponent', () => {
  let component: DashboardCentralBankCustomerPageComponent;
  let fixture: ComponentFixture<DashboardCentralBankCustomerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCentralBankCustomerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCentralBankCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
