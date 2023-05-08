import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { TableHeader } from 'src/app/models/rides.interface';
import { ShiftService } from 'src/app/services/shift.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent {
  shiftList!: any[];
  shiftList$: Observable<any> = this.shiftService.getShiftList()
  .pipe(
    tap((data: any) => this.shiftList = data) // solo muestra en consola la lista, quitar cuando ya este en la tabla
  );
  shiftForm!: FormGroup;
  headersArray: TableHeader[] = [{label: 'N°', property:'numberShift'},{label: 'Branch name', property:'branchName'}, {label: 'Free km', property:'freeKm'}]

  constructor(private shiftService: ShiftService, private fb: FormBuilder) {
   this.buildForm();
  }
  buildForm(){
    this.shiftForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      perKm: [null, [Validators.required, Validators.minLength(4)]],
      value: [null, [Validators.required, Validators.minLength(4)]]
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
