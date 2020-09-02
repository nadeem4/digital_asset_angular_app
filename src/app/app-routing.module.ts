import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CBDCPageComponent } from './pages/cbdc-page/cbdc-page.component';
import { DashboardBankTreasuryPageComponent } from './pages/dashboard-bank-treasury-page/dashboard-bank-treasury-page.component';
import { RequestHistoryPageComponent } from './pages/request-history-page/request-history-page.component';
import { DashboardCentralBankPageComponent } from './pages/dashboard-central-bank-page/dashboard-central-bank-page.component';
import { DashboardCentralBankCustomerPageComponent } from './pages/dashboard-central-bank-customer-page/dashboard-central-bank-customer-page.component';
import { DashboardCentralBankUserPageComponent } from './pages/dashboard-central-bank-user-page/dashboard-central-bank-user-page.component';
import { DashboardBankOperationUserPageComponent } from './pages/dashboard-bank-operation-user-page/dashboard-bank-operation-user-page.component';
import { PaymentRequestListPageComponent } from './pages/payment-request-list-page/payment-request-list-page.component';
import { QueueMonitoringComponent } from './pages/queue-monitoring/queue-monitoring.component';

const routes: Routes = [
  { path: 'index-page', component: IndexPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'cbdc-page', component: CBDCPageComponent },
  { path: 'dashboard-bank-treasury-page', component: DashboardBankTreasuryPageComponent },
  { path: 'request-history-page', component: RequestHistoryPageComponent },
  { path: 'payment-request-list', component: PaymentRequestListPageComponent},
  { path: 'payment-queue-monitoring', component: QueueMonitoringComponent},
  { path: 'dashboard-central-bank-page', component: DashboardCentralBankPageComponent },
  { path: 'dashboard-central-bank-user-page', component: DashboardCentralBankUserPageComponent },
  { path: 'dashboard-central-bank-customer-page', component: DashboardCentralBankCustomerPageComponent },
  { path: 'dashboard-bank-operation-user-page', component: DashboardBankOperationUserPageComponent},
  { path: '**', redirectTo: 'home-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
