import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-request',
  templateUrl: './dashboard-request.component.html',
  styleUrls: ['./dashboard-request.component.scss']
})
export class DashboardRequestComponent implements OnInit {
  @Input() dataList: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
