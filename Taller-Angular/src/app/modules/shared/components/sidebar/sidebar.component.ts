import { Component, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../icon/icon.component';
import { SidebarRoutes } from '../../../../const/sidebar.const';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor(private router: Router){
    console.log(this.router.url)
  }

  activated = this.router.url;

  menuOptions = SidebarRoutes;
  
}
