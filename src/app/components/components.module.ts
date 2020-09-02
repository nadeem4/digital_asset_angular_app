import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ClickOutsideModule } from 'ng-click-outside';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// reusable components
import { LoginBannerComponent } from './login-banner/login-banner.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderNonLoginComponent } from './header-non-login/header-non-login.component';
import { FooterNonLoginComponent } from './footer-non-login/footer-non-login.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeWhatWeOfferComponent } from './home-what-we-offer/home-what-we-offer.component';
import { CBDCCurrencyComponent } from './cbdc-currency/cbdc-currency.component';
import { CBDCTheFeaturesComponent } from './cbdc-the-features/cbdc-the-features.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { DashboardWeatherComponent } from './dashboard-weather/dashboard-weather.component';
import { DashboardRequestProgressComponent } from './dashboard-request-progress/dashboard-request-progress.component';
import { DashboardRecentRequestComponent } from './dashboard-recent-request/dashboard-recent-request.component';
import { DashboardAccountSummaryComponent } from './dashboard-account-summary/dashboard-account-summary.component';
import { DashboardRecentJournalEntriesComponent } from './dashboard-recent-journal-entries/dashboard-recent-journal-entries.component';
import { DashboardPaymentRequestSummaryComponent } from './dashboard-payment-request-summary/dashboard-payment-request-summary.component';
import { DashboardQueueSummaryComponent } from './dashboard-queue-summary/dashboard-queue-summary.component';
import { DashboardPaymentsComponent } from './dashboard-payments/dashboard-payments.component';
import { DashboardPaymentQueueTableComponent } from './dashboard-payment-queue-table/dashboard-payment-queue-table.component';
import { RequestHistoryTopBarComponent } from './request-history-top-bar/request-history-top-bar.component';
import { RequestHistoryTableComponent } from './request-history-table/request-history-table.component';
import { FormTokenComponent } from './form-token/form-token.component';
import { RequestHistoryNewConversionComponent } from './request-history-new-conversion/request-history-new-conversion.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalWindowsRequestSentComponent } from './modal-windows-request-sent/modal-windows-request-sent.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashboardRequestComponent } from './dashboard-request/dashboard-request.component';
import { DashboardRequestSummaryComponent } from './dashboard-request-summary/dashboard-request-summary.component';
import { DashboardBankListComponent } from './dashboard-bank-list/dashboard-bank-list.component';
import { CircleChartLegendComponent } from './circle-chart-legend/circle-chart-legend.component';
import { AddEditBankPopupComponent } from './add-edit-bank-popup/add-edit-bank-popup.component';
import { CircleChartWithLegendComponent } from './circle-chart-with-legend/circle-chart-with-legend.component';
import { PaymentRequestHistoryComponent } from './payment-request-history/payment-request-history.component';
import { CardComponent } from './card/card.component';
import { EntityBannerComponent } from './entity-banner/entity-banner.component';
import { PaymentRequestTableComponent } from './payment-request-table/payment-request-table.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { PaymentQueueListTableComponent } from './payment-queue-list-table/payment-queue-list-table.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
const components = [
  LoginBannerComponent,
  LoginFormComponent,
  HeaderNonLoginComponent,
  FooterNonLoginComponent,
  HeaderLoginComponent,
  HomeBannerComponent,
  HomeWhatWeOfferComponent,
  CBDCCurrencyComponent,
  CBDCTheFeaturesComponent,
  LeftNavigationComponent,
  DashboardWeatherComponent,
  DashboardRequestProgressComponent,
  DashboardRecentRequestComponent,
  DashboardAccountSummaryComponent,
  DashboardRecentJournalEntriesComponent,
  DashboardPaymentRequestSummaryComponent,
  DashboardQueueSummaryComponent,
  DashboardPaymentsComponent,
  DashboardPaymentQueueTableComponent,
  RequestHistoryTopBarComponent,
  RequestHistoryTableComponent,
  FormTokenComponent,
  RequestHistoryNewConversionComponent,
  PaginationComponent,
  ModalWindowsRequestSentComponent,
  CircleChartComponent,
  LineChartComponent,
  DashboardRequestComponent,
  DashboardRequestSummaryComponent,
  DashboardBankListComponent,
  CircleChartLegendComponent,
  AddEditBankPopupComponent,
  CircleChartWithLegendComponent,
  PaymentRequestHistoryComponent,
  CardComponent,
  EntityBannerComponent,
  PaymentRequestTableComponent,
  SearchBoxComponent,
  PaymentQueueListTableComponent
];

@NgModule({
  imports: [
             BrowserModule, CommonModule, FormsModule, ReactiveFormsModule,
             RouterModule, ChartsModule, ClickOutsideModule, NgbModule,
           ],
  declarations: [...components ],
  exports: [...components]
})
export class ComponentsModule {}
