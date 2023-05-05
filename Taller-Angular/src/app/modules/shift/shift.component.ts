import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent {
  shiftList$: Observable<any> = this.shiftService.getShiftList()
  .pipe(
    tap((data: any) => console.log(data, 'data shift')) // solo muestra en consola la lista, quitar cuando ya este en la tabla
  );
  shiftForm!: FormGroup;
  constructor(private shiftService: ShiftService, private fb: FormBuilder) {
   this.buildform();
  }
  buildform(){
    this.shiftForm = this.fb.group({
      name: [null, [Validators.required]],
      perKm: [null, [Validators.required]],
      value: [null, [Validators.required]]
    })
  }
  get name():FormControl{
    return this.shiftForm.get('name') as FormControl
  }
  get value():FormControl{
    return this.shiftForm.get('value') as FormControl
  }
  get perKm():FormControl{
    return this.shiftForm.get('perKm') as FormControl
  }
}
