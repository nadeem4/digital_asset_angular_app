import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded HeaderLoginComponent.
 */
@Component({
  selector: 'app-sd-header-login',
  templateUrl: 'header-login.component.html',
  styleUrls: ['header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {
  @Input() title = '';
  @Input() showSearch = true;

  username = '';

  /**
   * OnInit
   */
  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
}
