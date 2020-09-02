import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCentralBankUserPageComponent } from './dashboard-central-bank-user-page.component';

describe('DashboardCentralBankUserPageComponent', () => {
  let component: DashboardCentralBankUserPageComponent;
  let fixture: ComponentFixture<DashboardCentralBankUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCentralBankUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCentralBankUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
