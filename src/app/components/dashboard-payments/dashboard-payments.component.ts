import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardPaymentsComponent.
 */
@Component({
  selector: 'app-sd-dashboard-payments',
  templateUrl: 'dashboard-payments.component.html',
  styleUrls: ['dashboard-payments.component.scss']
})
export class DashboardPaymentsComponent {
  @Input() dataList: any = null;
  @Input() heading: string = "Payment" 
}
