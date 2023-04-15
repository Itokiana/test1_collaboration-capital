import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOrderProcComponent } from './subscription-order-proc.component';

describe('SubscriptionOrderProcComponent', () => {
  let component: SubscriptionOrderProcComponent;
  let fixture: ComponentFixture<SubscriptionOrderProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionOrderProcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionOrderProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
