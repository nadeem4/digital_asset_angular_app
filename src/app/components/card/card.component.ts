import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() valueUnit: string;
  @Input() value: string;
  @Input() tip: string = '';
  @Input() backgroundColor: string;
  @Input() tipType: string;
  @Input() showIconClass: boolean = true;

  @ViewChild('card', { read: ElementRef }) card: ElementRef;
  @ViewChild('tipEl', { read: ElementRef }) tipEl: ElementRef;
  @ViewChild('titleEl', { read: ElementRef }) titleEl: ElementRef;
  @ViewChild('priceTextEl', { read: ElementRef }) priceTextEl: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setBackgroundColor();
      this.setTipColor();
    });
  }

  setBackgroundColor() {
    this.renderer.addClass(this.card.nativeElement, this.backgroundColor);
    if (this.backgroundColor == 'white') {
      this.renderer.addClass(this.titleEl.nativeElement, 'black');
      this.renderer.addClass(this.priceTextEl.nativeElement, 'black');
    } else {
      this.renderer.addClass(this.titleEl.nativeElement, 'white');

      this.renderer.addClass(this.priceTextEl.nativeElement, 'white');
    }
  }

  setTipColor() {
    if (this.tipType == 'warning') {
      this.renderer.addClass(this.tipEl.nativeElement, 'warning');
    } else {
      this.renderer.addClass(this.tipEl.nativeElement, 'normal');
    }
  }
}
