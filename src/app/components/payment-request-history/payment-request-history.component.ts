import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-request-history',
  templateUrl: './payment-request-history.component.html',
  styleUrls: ['./payment-request-history.component.scss']
})
export class PaymentRequestHistoryComponent implements OnInit {
  @Input() dataList: any = null;
  showIconClass: boolean =false

  @Input() rightLegendForDonought: boolean = false
  @Input() bottomLegendForDonought: boolean = true
  @Input() rowWiseLegendForDonought: boolean = false
  @Input() columnWiseLegendForDonought: boolean = true
  lableBelowCount: boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log({dataList: this.dataList})
  }

}
