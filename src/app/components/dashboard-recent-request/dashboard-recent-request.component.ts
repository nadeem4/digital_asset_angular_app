import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardRecentRequestComponent.
 */
@Component({
  selector: 'app-sd-dashboard-recent-request',
  templateUrl: 'dashboard-recent-request.component.html',
  styleUrls: ['dashboard-recent-request.component.scss']
})
export class DashboardRecentRequestComponent {
  @Input() dataList: any = null;
}
