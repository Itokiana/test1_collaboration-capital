import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubscriptionOrderProcsRoutes } from './subscription-order-procs.routing';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { SubscriptionOrderProcComponent } from './component/subscription-order-proc/subscription-order-proc.component';
import { SelectedSubscriptionInfosComponent } from './component/selected-subscription-infos/selected-subscription-infos.component';



@NgModule({
  declarations: [
    SubscriptionOrderProcComponent,
    SelectedSubscriptionInfosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SubscriptionOrderProcsRoutes),
    NzDatePickerModule,
    NzStepsModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzCardModule,
    NzSwitchModule,
    NzRadioModule,
    NzSpaceModule,
    NzDividerModule,
    NzTypographyModule,
    NzInputModule,
    NzDescriptionsModule,
    NzStatisticModule
  ]
})
export class SubscriptionOrderProcsModule { }
