import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleChartWithLegendComponent } from './circle-chart-with-legend.component';

describe('CircleChartWithLegendComponent', () => {
  let component: CircleChartWithLegendComponent;
  let fixture: ComponentFixture<CircleChartWithLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleChartWithLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleChartWithLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
