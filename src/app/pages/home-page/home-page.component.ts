import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import nprogress from 'nprogress';

/**
 * This class represents the lazy loaded HomePageComponent.
 */
@Component({
  selector: 'app-sd-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  data$: Observable<any[]> = this.store.select(state => state.data);

  constructor(private store: Store<{ data: any[] }>) {
  }

  ngOnInit() {
    nprogress.start();

    setTimeout( () => {
      this.store.dispatch({ type: 'Load Home' });
      nprogress.done();
    }, 1000);
  }

  ngOnDestroy() {
    nprogress.done();
  }
}
