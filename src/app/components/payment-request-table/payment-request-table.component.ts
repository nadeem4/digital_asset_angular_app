import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-request-table',
  templateUrl: './payment-request-table.component.html',
  styleUrls: ['./payment-request-table.component.scss'],
})
export class PaymentRequestTableComponent {
  @Input() dataList: any[] = [];

  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [], // array of page links
  };
  @Output() changePagination: EventEmitter<any> = new EventEmitter();
}
