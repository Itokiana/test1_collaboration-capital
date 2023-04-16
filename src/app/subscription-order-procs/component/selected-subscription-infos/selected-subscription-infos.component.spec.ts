import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSubscriptionInfosComponent } from './selected-subscription-infos.component';

describe('SelectedSubscriptionInfosComponent', () => {
  let component: SelectedSubscriptionInfosComponent;
  let fixture: ComponentFixture<SelectedSubscriptionInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSubscriptionInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedSubscriptionInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
