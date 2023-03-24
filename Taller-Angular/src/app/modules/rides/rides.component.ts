import { Component } from '@angular/core';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent {

  constructor(private ridesService: RidesService){
console.log(ridesService.getRideList())
  }

}
