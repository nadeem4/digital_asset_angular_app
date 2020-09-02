import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded PaginationComponent.
 */
@Component({
  selector: 'app-sd-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {
  @Input() pageData = {
    pagePerNumber: 10, // row number per page
    pageIndex: 0, // current page index
    totalPage: 0, // total number of pages
    totalRow: 0, // total number of rows
  };

  @Output() changePagination: EventEmitter<any> = new EventEmitter();

  /**
   * click Prev arrow
   */
  clickPrev() {
    this.pageData.pageIndex--;
    this.changePagination.emit(this.pageData);
  }

  /**
   * click Page Number Link
   * @param index clicked page index
   */
  clickPageLink(index) {
    this.pageData.pageIndex = index;
    this.changePagination.emit(this.pageData);
  }

  /**
   * click Next arrow
   */
  clickNext() {
    this.pageData.pageIndex++;
    this.changePagination.emit(this.pageData);
  }

  // get Pages
  getPages() {
    return [...new Array(this.pageData.totalPage).keys()];
  }
}
