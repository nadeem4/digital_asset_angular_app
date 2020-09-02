import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-circle-chart-legend',
  templateUrl: './circle-chart-legend.component.html',
  styleUrls: ['./circle-chart-legend.component.scss'],
})
export class CircleChartLegendComponent implements OnInit {
  @Input() dataList: any = null;

  //  set this property to true, in order to display legend column Wise
  @Input() columnWiseLegend: boolean = true;

  // set this property to true in order to display legend row wise
  @Input() rowWiseLegend: boolean = false;

  @Input() labelBelowCount: boolean = true;

  @Input() labelNextToCount: boolean = false;

  @Input() swapLabelValuePos: boolean = false;

  @ViewChild('chartLegend', { read: ElementRef }) chartLegend: ElementRef;
  @ViewChildren('textArea', { read: ElementRef }) textArea: QueryList<any>;
  values: any = null;
  colors: [] = [];
  legends: [] = [];

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    this.values = this.dataList.data;
    this.colors = this.dataList.colors;
    this.legends = this.dataList.legends;
    console.log({legend: this.legends, data: this.values, colors: this.colors})
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setLegendOrientation();
      this.setOrientationOfLabelInLegend();
    });
  }

  setLegendOrientation() {
    console.log({ chartLegend: this.chartLegend });
    if (this.columnWiseLegend) {
      this.render.addClass(this.chartLegend.nativeElement, 'column-wise');
    } else {
      this.render.addClass(this.chartLegend.nativeElement, 'row-wise');
    }
  }

  setOrientationOfLabelInLegend() {
    console.log('labelBelowCount', this.labelBelowCount);

    if (this.labelBelowCount) {
      this.textArea.forEach((t) => {
        this.render.addClass(t.nativeElement, 'label-below-count');
      });
    } else {
      this.textArea.forEach((t) => {
        this.render.addClass(t.nativeElement, 'label-next-to-count');
      });
    }
  }
}
