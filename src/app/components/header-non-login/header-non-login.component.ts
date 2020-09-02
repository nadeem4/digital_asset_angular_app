import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded HeaderNonLoginComponent.
 */
@Component({
  selector: 'app-sd-header-non-login',
  templateUrl: 'header-non-login.component.html',
  styleUrls: ['header-non-login.component.scss']
})
export class HeaderNonLoginComponent {
  @Input() activeMenu = '';
  @Output() changePageIndex: EventEmitter<any> = new EventEmitter();
}
