import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardQueueSummaryComponent.
 */
@Component({
  selector: 'app-sd-dashboard-queue-summary',
  templateUrl: 'dashboard-queue-summary.component.html',
  styleUrls: ['dashboard-queue-summary.component.scss']
})
export class DashboardQueueSummaryComponent {
  @Input() dataList: any = null;

  @Input() rightLegendForDonought: boolean = false
  @Input() bottomLegendForDonought: boolean = true
  @Input() rowWiseLegendForDonought: boolean = true
  @Input() columnWiseLegendForDonought: boolean = false
}
