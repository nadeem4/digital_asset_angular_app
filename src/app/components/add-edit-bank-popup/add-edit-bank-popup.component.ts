import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-bank-popup',
  templateUrl: './add-edit-bank-popup.component.html',
  styleUrls: ['./add-edit-bank-popup.component.scss']
})
export class AddEditBankPopupComponent implements OnInit {


  bankDetails: FormGroup

  constructor(
    public activeModal: NgbActiveModal, private store: Store<{ data: any[] }>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.bankDetails = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      desc: ['']
    })
  }


  createNewBank() {
    console.log({BankDetailsComponent: this.bankDetails.value})
    this.store.dispatch({type: "Add New Bank", payload: this.bankDetails.value})
    this.activeModal.close('Close Click')
  }

  editBank( i: number ) {
    this.store.dispatch({type: "Edit Bank", payload: {index:i, data: this.bankDetails.value}})
    this.activeModal.close('Close Click')
  }

}
