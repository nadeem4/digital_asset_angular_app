import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleChartLegendComponent } from './circle-chart-legend.component';

describe('CircleChartLegendComponent', () => {
  let component: CircleChartLegendComponent;
  let fixture: ComponentFixture<CircleChartLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleChartLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleChartLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
