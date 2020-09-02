import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded HomeBannerComponent.
 */
@Component({
  selector: 'app-sd-home-banner',
  templateUrl: 'home-banner.component.html',
  styleUrls: ['home-banner.component.scss']
})
export class HomeBannerComponent {
  @Input() dataList: any = null;
}
