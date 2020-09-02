import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditBankPopupComponent } from '../add-edit-bank-popup/add-edit-bank-popup.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard-bank-list',
  templateUrl: './dashboard-bank-list.component.html',
  styleUrls: ['./dashboard-bank-list.component.scss']
})
export class DashboardBankListComponent implements OnInit {

  @Input() dataList: any = null
  banks: []

  openAddEditPopup: boolean = false

  constructor(private modalService: NgbModal,  private store: Store<{ data: any[] }>) { }

  ngOnInit(): void {
  }

  addNewBank() {
    this.openAddEditPopup = true
    this.modalService.open(AddEditBankPopupComponent, { centered: true });
  }

  updateBankStatus( number: string, status: string ) {
    this.store.dispatch({type:"Update Bank Status", payload: {number: number, status: status}})
  }


}
