import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded FooterNonLoginComponent.
 */
@Component({
  selector: 'app-sd-footer-non-login',
  templateUrl: 'footer-non-login.component.html',
  styleUrls: ['footer-non-login.component.scss']
})
export class FooterNonLoginComponent {
  @Input() activeMenu = '';
  @Output() changePageIndex: EventEmitter<any> = new EventEmitter();
}
