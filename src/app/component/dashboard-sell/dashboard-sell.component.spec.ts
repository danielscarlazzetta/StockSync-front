import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSellComponent } from './dashboard-sell.component';

describe('DashboardSellComponent', () => {
  let component: DashboardSellComponent;
  let fixture: ComponentFixture<DashboardSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSellComponent]
    });
    fixture = TestBed.createComponent(DashboardSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
