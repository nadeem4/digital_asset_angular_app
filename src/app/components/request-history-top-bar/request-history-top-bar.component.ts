import { Component, Input, EventEmitter, Output } from '@angular/core';
import {
  NgbDateParserFormatter,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from '../../shared/dateformat';

/**
 * This class represents the lazy loaded RequestHistoryTopBarComponent.
 */
@Component({
  selector: 'app-sd-request-history-top-bar',
  templateUrl: 'request-history-top-bar.component.html',
  styleUrls: ['request-history-top-bar.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
  ],
})
export class RequestHistoryTopBarComponent {
  @Input() dataList: any = null;

  @Input() tabs: { name: string; color: string }[] = [
    {
      name: 'All',
      color: 'dark-blue',
    },
    {
      name: 'Tokenization',
      color: 'blue',
    },
    {
      name: 'De-tokenization',
      color: 'green',
    },
  ];
  @Output() changeTabs: EventEmitter<any> = new EventEmitter();
  @Output() changeDates: EventEmitter<any> = new EventEmitter();

  activeTab = 'All'; // 'All', 'Tokenization', 'De-tokenization'
}
