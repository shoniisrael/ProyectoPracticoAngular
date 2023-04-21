import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent {
shiftlist$!: Observable<any>;

constructor(private shiftService: ShiftService){
  this.shiftlist$ = this.shiftService.getshiftList()
  .pipe(
    tap( (data: any) => console.log(data, 'data shift')) // solo muestra en consola la lista, quitar cuando ya este en la tabla
  );
}
}
