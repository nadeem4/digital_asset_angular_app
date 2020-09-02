import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// app main component
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { dataReducer } from './reducers/data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './effects/data.effects';

// pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CBDCPageComponent } from './pages/cbdc-page/cbdc-page.component';
import { DashboardBankTreasuryPageComponent } from './pages/dashboard-bank-treasury-page/dashboard-bank-treasury-page.component';
import { RequestHistoryPageComponent } from './pages/request-history-page/request-history-page.component';
import { DashboardCentralBankPageComponent } from './pages/dashboard-central-bank-page/dashboard-central-bank-page.component';

// reusable components
import { ComponentsModule } from './components/components.module';

import { DataListService } from './shared/services/data-list.service';
import { DashboardCentralBankUserPageComponent } from './pages/dashboard-central-bank-user-page/dashboard-central-bank-user-page.component';
import { DashboardCentralBankCustomerPageComponent } from './pages/dashboard-central-bank-customer-page/dashboard-central-bank-customer-page.component';
import { DashboardBankOperationUserPageComponent } from './pages/dashboard-bank-operation-user-page/dashboard-bank-operation-user-page.component';
import { PaymentRequestListPageComponent } from './pages/payment-request-list-page/payment-request-list-page.component';
import { QueueMonitoringComponent } from './pages/queue-monitoring/queue-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    HomePageComponent,
    CBDCPageComponent,
    DashboardBankTreasuryPageComponent,
    RequestHistoryPageComponent,
    DashboardCentralBankPageComponent,
    DashboardCentralBankUserPageComponent,
    DashboardCentralBankCustomerPageComponent,
    DashboardBankOperationUserPageComponent,
    PaymentRequestListPageComponent,
    QueueMonitoringComponent,
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            NgbModule,
            ComponentsModule,
            AppRoutingModule,
            StoreModule.forRoot({ data: dataReducer }),
            EffectsModule.forRoot([DataEffects])
           ],
  providers: [DataListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
