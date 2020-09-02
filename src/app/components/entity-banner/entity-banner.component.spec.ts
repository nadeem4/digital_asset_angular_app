import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityBannerComponent } from './entity-banner.component';

describe('EntityBannerComponent', () => {
  let component: EntityBannerComponent;
  let fixture: ComponentFixture<EntityBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
