import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded FormTokenComponent.
 */
@Component({
  selector: 'app-sd-form-token',
  templateUrl: 'form-token.component.html',
  styleUrls: ['form-token.component.scss']
})
export class FormTokenComponent {
  @Input() dataList: any = null;
  @Output() postChange: EventEmitter<any> = new EventEmitter();

  changeType = 'cashToken'; // 'cashToken', 'tokenCash'

  amountValue = '0';

  // click Button
  clickButton() {
    this.postChange.emit({
      changeType: this.changeType,
      amountValue: this.amountValue
    });
  }

  // showError()
  showError() {
    let error = false;
    switch (this.changeType) {
      case 'cashToken':
        if (parseFloat(this.amountValue) > this.dataList.cashAccount) {
          error = true;
        }
        break;
      case 'tokenCash':
        if (parseFloat(this.amountValue) > this.dataList.cbdcTokens) {
          error = true;
        }
        break;
      default:
        break;
    }

    return error;
  }

  // is Number
  isNumber() {
    return (this.amountValue !== '' && this.amountValue !== '0') ?
             /^[+]{0,1}(\d+)$/.test(this.amountValue) : true;
  }

  // is Multiple 10
  isMultiple10() {
    if (this.changeType === 'cashToken') {
      return parseInt(this.amountValue, 10) % 10 === 0;
    } else {
      return true;
    }
  }
}
