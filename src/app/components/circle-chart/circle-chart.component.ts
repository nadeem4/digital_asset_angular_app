import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded CircleChartComponent.
 */
@Component({
  selector: 'app-sd-circle-chart',
  templateUrl: 'circle-chart.component.html',
  styleUrls: ['circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {
  @Input() dataList: any;
  @Input() showLegend: boolean = false
  // doughnut Chart Options
  doughnutChartOptions = {
    responsive: false,
    aspectRatio: 1,
    cutoutPercentage: 80,
    tooltips: {
      enabled: false,
    },
  };
  // Doughnut
  donutColors = [];
  doughnutChartLabels = ['', ''];
  doughnutChartData = [];
  doughnutChartType = 'doughnut';

  constructor() {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.donutColors = [
      {
        backgroundColor: this.dataList.colors
      }
    ];

    this.doughnutChartData = this.dataList.data;
  }
}
