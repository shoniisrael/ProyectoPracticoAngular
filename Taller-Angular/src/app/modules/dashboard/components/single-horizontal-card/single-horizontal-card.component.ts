import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-horizontal-card',
  templateUrl: './single-horizontal-card.component.html',
  styleUrls: ['./single-horizontal-card.component.scss'],
})
export class SingleHorizontalCardComponent {
  @Input() colorValue: 'pink' | 'orange' | 'blueberry' | 'green' = 'pink';
}
