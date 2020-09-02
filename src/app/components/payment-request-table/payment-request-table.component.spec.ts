import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestTableComponent } from './payment-request-table.component';

describe('PaymentRequestTableComponent', () => {
  let component: PaymentRequestTableComponent;
  let fixture: ComponentFixture<PaymentRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
