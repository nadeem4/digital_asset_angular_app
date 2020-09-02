import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-queue-list-table',
  templateUrl: './payment-queue-list-table.component.html',
  styleUrls: ['./payment-queue-list-table.component.scss']
})
export class PaymentQueueListTableComponent implements OnInit {
  @Input() dataList: any[] = [];

  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [], // array of page links
  };
  @Output() changePagination: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log({paymentQueue: this.dataList})
  }

}
