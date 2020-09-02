import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the LoginFormComponent.
 */
@Component({
  selector: 'app-sd-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent {
  @Input() dataList: any[] = [];
  @Output() loginSuccess: EventEmitter<any> = new EventEmitter();
  emailId = '';
  password = '';
  showLoginError = false;

  /**
   * click on Login
   */
  clickLogin() {
    console.log({dataList: this.dataList})
    this.dataList.forEach((item, index) => {
      if (item.email === this.emailId
       && item.password === this.password) {
        this.showLoginError = false;
        this.loginSuccess.emit(item);
      } else {
        this.showLoginError = true;
      }
    });
  }

  /**
   * check Email format
   * @param mail Email value
   * @return is validate email
   */
  checkMail(mail) {
    if (mail.trim() === '') {
      return true;
    }
    const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(mail)) {
      return true;
    } else {
      return false;
    }
  }
}
