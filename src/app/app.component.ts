import { Component } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1_collaboration_capital';
  date = null;

  constructor(private i18n: NzI18nService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
