import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded LeftNavigationComponent.
 */
@Component({
  selector: 'app-sd-left-navigation',
  templateUrl: 'left-navigation.component.html',
  styleUrls: ['left-navigation.component.scss'],
})
export class LeftNavigationComponent implements OnInit {
  @Input() activeMenu = '';
  @Output() changePageIndex: EventEmitter<any> = new EventEmitter();

  openMenu = false;
  role = '';

  /**
   * OnInit
   */
  ngOnInit() {
    this.role = localStorage.getItem('role');
  }

  showDashboard() {
    return (
      this.role === 'Bank Treasury User' ||
      this.role === 'Bank Operations User' ||
      this.role === 'Central Bank User' ||
      this.role === 'Central Bank Customer'
    );
  }

  showTokenization() {
    return this.role === 'Bank Treasury User';
  }

  showJournalEntries() {
    return this.role === 'Bank Treasury User';
  }

  showPaymentRequest() {
    return (
      this.role === 'Central Bank Operations User' ||
      this.role === 'Bank Operations User'
    );
  }

  showQueueMonitoring() {
    return (
      this.role === 'Central Bank Operations User' ||
      this.role === 'Bank Operations User'
    );
  }
}
