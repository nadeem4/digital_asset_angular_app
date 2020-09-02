import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsRequestSentComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-request-sent',
  templateUrl: 'modal-windows-request-sent.component.html',
  styleUrls: ['modal-windows-request-sent.component.scss']
})
export class ModalWindowsRequestSentComponent {
  @Input() modalData = {
    name: '',
    itemData: null
  };

  /**
   * close Modal
   */
  closeModal() {
    this.modalData['name'] = '';
  }
}
