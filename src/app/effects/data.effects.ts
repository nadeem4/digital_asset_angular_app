import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { DataListService } from '../shared/services/data-list.service';

@Injectable()
export class DataEffects {

  loadLogin$ = createEffect(() => this.actions$.pipe(
    ofType('Load Login'),
    mergeMap(() => this.dataListService.getLoginData()
      .pipe(
        map(data => ({ type: 'Login Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadHome$ = createEffect(() => this.actions$.pipe(
    ofType('Load Home'),
    mergeMap(() => this.dataListService.getHomeData()
      .pipe(
        map(data => ({ type: 'Home Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadCBDC$ = createEffect(() => this.actions$.pipe(
    ofType('Load CBDC'),
    mergeMap(() => this.dataListService.getCBDCData()
      .pipe(
        map(data => ({ type: 'CBDC Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDashboardBankTreasury$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Bank Treasury'),
    mergeMap(() => this.dataListService.getDashboardBankTreasuryData()
      .pipe(
        map(data => ({ type: 'Dashboard Bank Treasury Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadRequestHistoryLoadedSuccess$ = createEffect(() => this.actions$.pipe(
    ofType('Load Request History'),
    mergeMap(() => this.dataListService.getRequestHistoryData()
      .pipe(
        map(data => ({ type: 'Request History Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDashboardCentralBank$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Central Bank'),
    mergeMap(() => this.dataListService.getDashboardCentralBankData()
      .pipe(
        map(data => ({ type: 'Dashboard Central Bank Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDashboardCentralBankRunLSM$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Central Bank Run LSM'),
    mergeMap(() => this.dataListService.getDashboardCentralBankDataRunLSM()
      .pipe(
        map(data => ({ type: 'Dashboard Central Bank Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );


  loadDashboardCentralBankUser$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Central Bank User'),
    mergeMap(() => this.dataListService.getDashboardCentralBankUserData()
      .pipe(
        map(data => ({ type: 'Dashboard Central Bank User Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDashboardCentralBankCustomer$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Central Bank Customer'),
    mergeMap(() => this.dataListService.getDashboardCentralBankCustomerData()
      .pipe(
        map(data => ({ type: 'Dashboard Central Bank Customer Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDashboardBankOperationsUser$ = createEffect(() => this.actions$.pipe(
    ofType('Load Dashboard Bank Operation User'),
    mergeMap(() => this.dataListService.getDashboardOperationBankUserData()
      .pipe(
        map(data => ({ type: 'Dashboard Bank Operation User Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadPaymentRequestListData$ = createEffect(() => this.actions$.pipe(
    ofType('Load Payment Request List'),
    mergeMap(() => this.dataListService.getPaymentRequestListData()
      .pipe(
        map(data => ({ type: 'Payment Request List Data Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadPaymentQueueListData$ = createEffect(() => this.actions$.pipe(
    ofType('Load Queue History'),
    mergeMap(() => this.dataListService.getPaymentQueueListData()
      .pipe(
        map(data => ({ type: 'Queue History Data Loaded Success', data })),
        catchError(() => EMPTY)
      ))
    )
  );



 /*  addNewBank$ = createEffect(() => this.actions$.pipe(
    ofType('Add New Bank'),
    mergeMap((data) => this.dataListService.addNewBank(data['payload'])
      .pipe(
        map(data => ({ type: 'Bank Added Success', payload: data })),
        catchError(() => EMPTY)
      ))
    )
  ); */

/*   edditBank$ = createEffect(() => this.actions$.pipe(
    ofType('Edit Bank'),
    mergeMap((data) => this.dataListService.addNewBank(data['payload'])
      .pipe(
        map(data => ({ type: 'Bank Added Success', payload: data })),
        catchError(() => EMPTY)
      ))
    )
  ); */

  constructor(
    private actions$: Actions,
    private dataListService: DataListService
  ) {}
}
