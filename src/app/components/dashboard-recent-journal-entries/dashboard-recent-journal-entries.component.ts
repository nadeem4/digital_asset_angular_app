import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardRecentJournalEntriesComponent.
 */
@Component({
  selector: 'app-sd-dashboard-recent-journal-entries',
  templateUrl: 'dashboard-recent-journal-entries.component.html',
  styleUrls: ['dashboard-recent-journal-entries.component.scss']
})
export class DashboardRecentJournalEntriesComponent {
  @Input() dataList: any = null;
}
