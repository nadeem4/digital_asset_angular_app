import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardRequestProgressComponent.
 */
@Component({
  selector: 'app-sd-dashboard-request-progress',
  templateUrl: 'dashboard-request-progress.component.html',
  styleUrls: ['dashboard-request-progress.component.scss']
})
export class DashboardRequestProgressComponent {
  @Input() dataList: any = null;
}
