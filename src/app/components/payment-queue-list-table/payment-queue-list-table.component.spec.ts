import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentQueueListTableComponent } from './payment-queue-list-table.component';

describe('PaymentQueueListTableComponent', () => {
  let component: PaymentQueueListTableComponent;
  let fixture: ComponentFixture<PaymentQueueListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentQueueListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentQueueListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
