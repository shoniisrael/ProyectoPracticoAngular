import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-percent',
  templateUrl: './card-percent.component.html',
  styleUrls: ['./card-percent.component.scss'],
})
export class CardPercentComponent {
  @Input() colorValue: 'pink' | 'orange' | 'blueberry' | 'green' = 'pink';
}
