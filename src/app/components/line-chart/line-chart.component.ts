import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

/**
 * This class represents the lazy loaded LineChartComponent.
 */
@Component({
  selector: 'app-sd-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() dataList: any[];
  chartLables: any[] = [];
  chartValues: any[] = [
    { data: [], label: '' }
  ];
  // line Chart Options
  lineChartOptions = {
    responsive: false,
    aspectRatio: 1,
    elements: {
      point:
      {
        radius: 2,
        hoverRadius: 5,
        hoverBorderWidth: 1,
        backgroundColor: 'rgba(255, 0, 0, 0.1)'
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            fontColor: 'rgba(132, 146, 156, 1)',
            fontSize: 11,
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            fontColor: 'rgba(132, 146, 156, 1)',
            fontSize: 11,
            callback:
            (num) => {
              num = parseInt(num, 10) / 1000 + 'k';
              return num;
            }
          },
        },
      ]
    },
    tooltips: {
      backgroundColor: '#fff',
      bodyFontColor: '#58595b',
      displayColors: false,
      callbacks: {
        title: () => {},
        label: (tooltipItem, data) => {
          const multistringText = [tooltipItem.xLabel];

          let result = '';
          let counter = 0;
          let num = tooltipItem.yLabel;
          num = (parseInt(num, 10) || 0).toString();
          for (let i = num.length - 1; i >= 0; i--) {
            counter++;
            result = num.charAt(i) + result;
            if (!(counter % 3) && i !== 0) { result = ',' + result; }
          }

          multistringText.push(`$${result}`);

          return multistringText;
        }
      }
    }
  };
  // line Chart Colors
  public lineChartColors: Color[] = [
    {
      borderColor: '#68d366',
      backgroundColor: 'rgba(247, 251, 245, 1)',
    },
  ];
  // line Chart Legend
  public lineChartLegend = false;
  // line Chart Type
  public lineChartType = 'line';

  constructor() {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.chartLables = [];
    this.chartValues[0]['data'] = [];

    this.dataList.forEach((item, index) => {
       this.chartLables.push(item['month']);
       this.chartValues[0]['data'].push(item['percentage']);
    });
  }

  /**
   * OnChanges
   */
  ngOnChanges() {
    this.chartLables = [];
    this.chartValues[0]['data'] = [];

    this.dataList.forEach((item, index) => {
       this.chartLables.push(item['month']);
       this.chartValues[0]['data'].push(item['percentage']);
    });
  }
}
