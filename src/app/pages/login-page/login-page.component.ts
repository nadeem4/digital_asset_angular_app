import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

/**
 * This class represents the lazy loaded LoginPageComponent.
 */
@Component({
  selector: 'app-sd-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select((state) => state.data);
  // show Login Failed
  showLoginFailed = false;

  constructor(
    private router: Router,
    private store: Store<{ data: any[] }>,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.store.dispatch({ type: 'Load Login' });
    this.renderer.addClass(this.document.body, 'hd-white');
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'hd-white');
  }

  /**
   * on Login Success
   */
  loginSuccess(roleData) {
    switch (roleData.role) {
      case 'Bank Treasury User':
        localStorage.setItem('role', roleData.role);
        localStorage.setItem('username', roleData.username);
        this.router.navigate(['dashboard-bank-treasury-page']);
        break;
      case 'Central Bank Operations User':
        localStorage.setItem('role', roleData.role);
        localStorage.setItem('username', roleData.username);
        this.router.navigate(['dashboard-central-bank-page']);
        break;
      case 'Central Bank User':
        localStorage.setItem('role', roleData.role);
        localStorage.setItem('username', roleData.username);
        this.router.navigate(['dashboard-central-bank-user-page']);
        break;
      case 'Central Bank Customer':
        localStorage.setItem('role', roleData.role);
        localStorage.setItem('username', roleData.username);
        this.router.navigate(['dashboard-central-bank-customer-page']);
        break;
      case 'Bank Operations User':
        localStorage.setItem('role', roleData.role);
        localStorage.setItem('username', roleData.username);
        this.router.navigate(['dashboard-bank-operation-user-page']);
        break;
      default:
        break;
    }
  }
}
