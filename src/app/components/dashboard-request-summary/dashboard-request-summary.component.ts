import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-request-summary',
  templateUrl: './dashboard-request-summary.component.html',
  styleUrls: ['./dashboard-request-summary.component.scss']
})
export class DashboardRequestSummaryComponent implements OnInit {
  @Input() dataList: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
