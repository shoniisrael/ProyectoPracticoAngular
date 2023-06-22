import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  reactiveForm: FormGroup = undefined!;

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
      homeLocation: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
      workLocation: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get nameValid() {
    return (
      this.reactiveForm.get('name')?.invalid &&
      this.reactiveForm.get('name')?.touched
    );
  }

  get lastNameValid() {
    return (
      this.reactiveForm.get('lastname')?.invalid &&
      this.reactiveForm.get('lastname')?.touched
    );
  }

  get homeLocationValid() {
    return (
      this.reactiveForm.get('homeLocation')?.invalid &&
      this.reactiveForm.get('homeLocation')?.touched
    );
  }

  get workLocationValid() {
    return (
      this.reactiveForm.get('workLocation')?.invalid &&
      this.reactiveForm.get('workLocation')?.touched
    );
  }

  saveClient() {}
}
