import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardWeatherComponent.
 */
@Component({
  selector: 'app-sd-dashboard-weather',
  templateUrl: 'dashboard-weather.component.html',
  styleUrls: ['dashboard-weather.component.scss']
})
export class DashboardWeatherComponent {
  @Input() showInfo = false;
  @Input() dataList: any = null;
}
