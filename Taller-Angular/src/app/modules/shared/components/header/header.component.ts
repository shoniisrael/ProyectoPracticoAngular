import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user!:string ;
}
