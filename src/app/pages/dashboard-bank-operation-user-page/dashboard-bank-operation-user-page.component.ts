import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

@Component({
  selector: 'app-dashboard-bank-operation-user-page',
  templateUrl: './dashboard-bank-operation-user-page.component.html',
  styleUrls: ['./dashboard-bank-operation-user-page.component.scss'],
})
export class DashboardBankOperationUserPageComponent implements OnInit {
  data$: Observable<any[]> = this.store.select((state) => state.data);

  rightLegendForDonought: boolean = true
  bottomLegendForDonought: boolean = false
  rowWiseLegendForDonought: boolean = false
  columnWiseLegendForDonought: boolean = true

  pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 20, // total number of pages
    totalRow: 0, // total number of rows
    pagerLinks: [], // array of page links
  };

  modalData = {
    name: '', // 'modal-windows-request-sent'
    itemData: null,
  };

  constructor(private store: Store<{ data: any[] }>) {}

  ngOnInit() {
    nprogress.start();

    setTimeout(() => {
      this.store.dispatch({ type: 'Load Dashboard Bank Operation User' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }


}
