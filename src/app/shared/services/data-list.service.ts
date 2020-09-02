import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { environment } from '../../../environments/environment';
import { take } from 'rxjs/operators';

/**
 * This class provides the DataListService service
 */
@Injectable()
export class DataListService {
  private apiUrl = environment.apiBase;  // URL to web api

  /**
   * Creates a new DataListService with the injected HttpClient.
   */
  constructor(protected httpClient: HttpClient) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   */
  getData(urlAddress: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + urlAddress);
  }

  /**
   * GET data for Login page
   */
  getLoginData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataLogin.json');
  }

  /**
   * GET data for Home page
   */
  getHomeData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataHome.json');
  }

  /**
   * GET data for CBDC page
   */
  getCBDCData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataCBDC.json');
  }

  /**
   * GET table data for Dashboard Bank Treasury page
   */
  getDashboardBankTreasuryData(): Observable<string[]> {
    if (Math.round(Math.random())) {
      return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardBankTreasury.json');
    } else {
      return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardBankTreasuryDifferent.json');
    }
  }

  /**
   * GET data for Request History page
   */
  getRequestHistoryData(): Observable<string[]> {
    if (Math.round(Math.random())) {
      return this.httpClient.get<string[]>(this.apiUrl + 'dataRequestHistory.json');
    } else {
      return this.httpClient.get<string[]>(this.apiUrl + 'dataRequestHistoryDifferent.json');
    }
  }

  /**
   * GET data for Dashboard Central Bank page
   */
  getDashboardCentralBankData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardCentralBank.json');
  }

  /**
   * GET data of run LSM for Dashboard Central Bank page
   */
  getDashboardCentralBankDataRunLSM(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardCentralBankRunLSM.json');
  }


  /**
   * GET data for Dashboard Central Bank User page
   */
  getDashboardCentralBankUserData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardCentralBankUser.json');
  }

  

  /**
   * GET data for Dashboard Central Bank Customer page
   */
  getDashboardCentralBankCustomerData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardCentralBankCustomer.json');
  }

   /**
   * GET data for Dashboard Central Bank Customer page
   */
  getDashboardOperationBankUserData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataDashboardBankOperationUser.json');
  }

  // this will return the information regarding newly added bank
  addNewBank(data) : Observable<any> {
    console.log({ServiceData: data})
    return this.httpClient.post(this.apiUrl + 'dataDashboardCentralBankCustomer.json', data);
  }

   /**
   * GET data for Payment History page
   */
  getPaymentRequestListData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataPaymentRequestList.json');
  }

  
   /**
   * GET data for Queue History page
   */
  getPaymentQueueListData(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.apiUrl + 'dataPaymentQueueList.json');
  }
}
