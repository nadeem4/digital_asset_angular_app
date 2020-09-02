import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded HomeWhatWeOfferComponent.
 */
@Component({
  selector: 'app-sd-home-what-we-offer',
  templateUrl: 'home-what-we-offer.component.html',
  styleUrls: ['home-what-we-offer.component.scss']
})
export class HomeWhatWeOfferComponent {
  @Input() dataList: any = null;
  activeIndex = 0;
}
