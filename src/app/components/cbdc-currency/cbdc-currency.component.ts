import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded CBDCCurrencyComponent.
 */
@Component({
  selector: 'app-sd-cbdc-currency',
  templateUrl: 'cbdc-currency.component.html',
  styleUrls: ['cbdc-currency.component.scss']
})
export class CBDCCurrencyComponent {
  @Input() dataList: any = null;
}
