import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded CBDCTheFeaturesComponent.
 */
@Component({
  selector: 'app-sd-cbdc-the-features',
  templateUrl: 'cbdc-the-features.component.html',
  styleUrls: ['cbdc-the-features.component.scss']
})
export class CBDCTheFeaturesComponent {
  @Input() dataList: any = null;
}
