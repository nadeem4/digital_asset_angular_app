import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded RequestHistoryNewConversionComponent.
 */
@Component({
  selector: 'app-sd-request-history-new-conversion',
  templateUrl: 'request-history-new-conversion.component.html',
  styleUrls: ['request-history-new-conversion.component.scss']
})
export class RequestHistoryNewConversionComponent {
  @Input() dataList: any = null;
  @Output() postChange: EventEmitter<any> = new EventEmitter();



}
