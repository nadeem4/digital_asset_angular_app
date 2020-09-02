import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

/**
 * This class represents the lazy loaded CBDCPageComponent.
 */
@Component({
  selector: 'app-sd-cbdc-page',
  templateUrl: 'cbdc-page.component.html',
  styleUrls: ['cbdc-page.component.scss']
})
export class CBDCPageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select(state => state.data);

  constructor(private store: Store<{ data: any[] }>) {
  }

  ngOnInit() {
    nprogress.start();

    setTimeout( () => {
      this.store.dispatch({ type: 'Load CBDC' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }
}
