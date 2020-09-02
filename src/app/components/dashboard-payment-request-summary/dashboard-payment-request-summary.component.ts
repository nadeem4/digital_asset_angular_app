import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardPaymentRequestSummaryComponent.
 */
@Component({
  selector: 'app-sd-dashboard-payment-request-summary',
  templateUrl: 'dashboard-payment-request-summary.component.html',
  styleUrls: ['dashboard-payment-request-summary.component.scss']
})
export class DashboardPaymentRequestSummaryComponent {
  @Input() dataList: any = null;
  @Output() changePeriod: EventEmitter<any> = new EventEmitter();

  activePeriod = 'M'; // 'D', 'W', 'M', 'T'
}
