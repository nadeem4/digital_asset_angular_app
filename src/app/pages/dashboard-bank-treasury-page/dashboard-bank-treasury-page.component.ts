import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

/**
 * This class represents the lazy loaded DashboardBankTreasuryPageComponent.
 */
@Component({
  selector: 'app-sd-dashboard-bank-treasury-page',
  templateUrl: 'dashboard-bank-treasury-page.component.html',
  styleUrls: ['dashboard-bank-treasury-page.component.scss'],
})
export class DashboardBankTreasuryPageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select((state) => state.data);

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
      this.store.dispatch({ type: 'Load Dashboard Bank Treasury' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }

  // post Change
  postChange(changeData) {
    this.modalData = {
      name: 'modal-windows-request-sent',
      itemData: changeData,
    };
  }

  // changePeriod
  changePeriod(period) {
    console.log(period);
    nprogress.start();

    setTimeout(() => {
      this.store.dispatch({ type: 'Load Dashboard Bank Treasury' });
      nprogress.done();
    }, 1000);
  }
}
