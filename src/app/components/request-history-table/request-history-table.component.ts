import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded RequestHistoryTableComponent.
 */
@Component({
  selector: 'app-sd-request-history-table',
  templateUrl: 'request-history-table.component.html',
  styleUrls: ['request-history-table.component.scss']
})
export class RequestHistoryTableComponent {
  @Input() dataList: any[] = [];

  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [] // array of page links
  };

  @Output() changePagination: EventEmitter<any> = new EventEmitter();
}
