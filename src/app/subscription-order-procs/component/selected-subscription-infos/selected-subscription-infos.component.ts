import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-subscription-infos',
  templateUrl: './selected-subscription-infos.component.html',
  styleUrls: ['./selected-subscription-infos.component.scss']
})
export class SelectedSubscriptionInfosComponent {
  @Input() total: number = 0;
  @Input() duration: number = 0;
  @Input() gigabytes: number = 0;
  @Input() priceUsdPerGb?: number = 0;
}
