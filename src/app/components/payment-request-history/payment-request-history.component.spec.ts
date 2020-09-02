import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestHistoryComponent } from './payment-request-history.component';

describe('PaymentRequestHistoryComponent', () => {
  let component: PaymentRequestHistoryComponent;
  let fixture: ComponentFixture<PaymentRequestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
