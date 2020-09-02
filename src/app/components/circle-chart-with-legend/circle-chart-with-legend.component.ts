import { Component, OnInit, Input, ViewChildren, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-circle-chart-with-legend',
  templateUrl: './circle-chart-with-legend.component.html',
  styleUrls: ['./circle-chart-with-legend.component.scss']
})
export class CircleChartWithLegendComponent implements OnInit {

  @Input() label: string
  @Input() dataList: any
  @Input() total: string
  @Input() totalValUnit: string
  @Input() columnWiseLegend: boolean = false
  @Input() rowWiseLegend: boolean = false
  @Input() showLegndOnRight: boolean = false
  @Input() showLegendOnBottom: boolean = false
  @Input() showLegend: boolean = true
  @Input() disableBottomBorder: boolean = false
  @Input() labelBelowCount: boolean = true
  
  swappedLabelValuePos: boolean = false

  @ViewChild('chartBoxWrapper', {read: ElementRef}) chartBoxWrapper: ElementRef


  constructor( private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout( () => {
      this.setOrientationOfLegends()
      this.swapLabelAndValuePos()
      this.setBorderBottom()
    })
  }

  swapLabelAndValuePos() {
    if( this.showLegendOnBottom && this.rowWiseLegend) {
      this.swappedLabelValuePos = true
    }
  }

  setOrientationOfLegends() {
    console.log({showLegendOnBottom: this.showLegendOnBottom})
    if (this.showLegendOnBottom) {
      this.renderer.addClass(this.chartBoxWrapper.nativeElement, 'bottom-legend')
    } else {
      this.renderer.addClass(this.chartBoxWrapper.nativeElement, 'right-legend')
    }
  }

  setBorderBottom() {
    if(this.disableBottomBorder) {
      this.renderer.removeClass(this.chartBoxWrapper.nativeElement, 'show-botton-border')
    }
  }

}
