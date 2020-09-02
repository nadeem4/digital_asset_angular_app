import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

/**
 * This class represents the lazy loaded RequestHistoryPageComponent.
 */
@Component({
  selector: 'app-sd-request-history-page',
  templateUrl: 'request-history-page.component.html',
  styleUrls: ['request-history-page.component.scss']
})
export class RequestHistoryPageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select(state => state.data);

  pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 3, // total number of pages
    totalRow: 30, // total number of rows
  };

  modalData = {
    name: '', // ''
    itemData: null
  };

  constructor(private store: Store<{ data: any[] }>) {
  }

  ngOnInit() {
    nprogress.start();

    setTimeout( () => {
      this.store.dispatch({ type: 'Load Request History' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }

  // change Tabs
  changeTabs(activeTab) {
    console.log(activeTab);
    this.store.dispatch({ type: 'Load Request History' });
  }

  // change Dates
  changeDates(filteredDate) {
    console.log(filteredDate);
    this.store.dispatch({ type: 'Load Request History' });
  }

  // change Pagination
  changePagination(pageData) {
    console.log(pageData);
    this.store.dispatch({ type: 'Load Request History' });
  }

  // post Change
  postChange(changeData) {
    this.modalData = {
      name: 'modal-windows-request-sent',
      itemData: changeData
    };
  }
}
