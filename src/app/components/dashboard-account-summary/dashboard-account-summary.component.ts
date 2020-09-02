import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardAccountSummaryComponent.
 */
@Component({
  selector: 'app-sd-dashboard-account-summary',
  templateUrl: 'dashboard-account-summary.component.html',
  styleUrls: ['dashboard-account-summary.component.scss']
})
export class DashboardAccountSummaryComponent {
  @Input() dataList: any = null;
  @Output() postChange: EventEmitter<any> = new EventEmitter();
}
