import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestListPageComponent } from './payment-request-list-page.component';

describe('PaymentRequestListPageComponent', () => {
  let component: PaymentRequestListPageComponent;
  let fixture: ComponentFixture<PaymentRequestListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequestListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
