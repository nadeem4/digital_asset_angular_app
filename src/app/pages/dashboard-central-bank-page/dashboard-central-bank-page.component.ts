import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

/**
 * This class represents the lazy loaded DashboardCentralBankPageComponent.
 */
@Component({
  selector: 'app-sd-dashboard-central-bank-page',
  templateUrl: 'dashboard-central-bank-page.component.html',
  styleUrls: ['dashboard-central-bank-page.component.scss']
})
export class DashboardCentralBankPageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select(state => state.data);
  pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 3, // total number of pages
    totalRow: 30, // total number of rows
  };

  constructor(private store: Store<{ data: any[] }>) {
  }

  ngOnInit() {
    nprogress.start();

    setTimeout( () => {
      this.store.dispatch({ type: 'Load Dashboard Central Bank' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }

  // click Run LSM
  clickRunLSM() {
    nprogress.start();

    setTimeout( () => {
      this.store.dispatch({ type: 'Load Dashboard Central Bank Run LSM' });
      nprogress.done();
    }, 1000);
  }

  // change Pagination
  changePagination(pageData) {
    console.log(pageData);
    if (Math.round(Math.random())) {
      this.store.dispatch({ type: 'Load Dashboard Central Bank' });
    } else {
      this.store.dispatch({ type: 'Load Dashboard Central Bank Run LSM' });
    }
  }
}
