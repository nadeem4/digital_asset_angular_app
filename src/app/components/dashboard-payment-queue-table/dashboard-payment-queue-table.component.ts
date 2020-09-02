import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded DashboardPaymentQueueTableComponent.
 */
@Component({
  selector: 'app-sd-dashboard-payment-queue-table',
  templateUrl: 'dashboard-payment-queue-table.component.html',
  styleUrls: ['dashboard-payment-queue-table.component.scss']
})
export class DashboardPaymentQueueTableComponent {
  @Input() dataList: any[] = [];

  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
  };

  @Output() clickRunLSM: EventEmitter<any> = new EventEmitter();
  @Output() changePagination: EventEmitter<any> = new EventEmitter();

  runLSMClicked = false;
}
