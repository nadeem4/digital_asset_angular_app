import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMonitoringComponent } from './queue-monitoring.component';

describe('QueueMonitoringComponent', () => {
  let component: QueueMonitoringComponent;
  let fixture: ComponentFixture<QueueMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
