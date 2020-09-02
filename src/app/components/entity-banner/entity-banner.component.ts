import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-banner',
  templateUrl: './entity-banner.component.html',
  styleUrls: ['./entity-banner.component.scss']
})
export class EntityBannerComponent implements OnInit {

  @Input() mainText: string
  @Input() subText: string
  @Input() shortName: string
  @Input() color: string

  constructor() { }

  ngOnInit(): void {
  }

}
