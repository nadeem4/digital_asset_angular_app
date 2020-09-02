import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

@Component({
  selector: 'app-queue-monitoring',
  templateUrl: './queue-monitoring.component.html',
  styleUrls: ['./queue-monitoring.component.scss']
})
export class QueueMonitoringComponent implements OnInit {
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
      this.store.dispatch({ type: 'Load Queue History' });
      nprogress.done();
    }, 1000);
  }

  ngAfterViewInit() {
    console.log({t: this.data$})
  }

  ngOnDestroy() {
    nprogress.done();
  }

  // change Tabs
  changeTabs(activeTab) {
    console.log(activeTab);
    this.store.dispatch({ type: 'Load Queue History' });
  }



  // change Pagination
  changePagination(pageData) {
    console.log(pageData);
    this.store.dispatch({ type: 'Load Queue History' });
  }

}
