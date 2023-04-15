import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionOrderProcComponent } from './subscription-order-procs/component/subscription-order-proc/subscription-order-proc.component';

const routes: Routes = [
  {
    path: '',
    // component: SubscriptionOrderProcComponent
    children: [
      {
        path: '',
        loadChildren: () => import('./subscription-order-procs/subscription-order-procs.module').then(m => m.SubscriptionOrderProcsModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
