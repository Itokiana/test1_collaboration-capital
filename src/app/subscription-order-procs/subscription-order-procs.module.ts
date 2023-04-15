import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubscriptionOrderProcsRoutes } from './subscription-order-procs.routing';
import { SubscriptionOrderProcComponent } from './component/subscription-order-proc/subscription-order-proc.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    SubscriptionOrderProcComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SubscriptionOrderProcsRoutes),
    NzDatePickerModule,
    NzStepsModule,
    NzButtonModule
  ]
})
export class SubscriptionOrderProcsModule { }
