import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAlumno } from '../models';

@Component({
  selector: 'app-abm-alumno',
  templateUrl: './abm-alumno.component.html',
  styleUrl: './abm-alumno.component.scss'
})
export class AbmAlumnoComponent {
  alumnoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AbmAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) private editAlumno?: IAlumno
  ) {
    this.alumnoForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
          Validators.maxLength(10),
          Validators.minLength(4),
        ],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        ],
      ],
      gender: ['', [Validators.required]],
    });

    if (editAlumno) {
      this.alumnoForm.patchValue(editAlumno);
    }
  }

  get firstNameControl() {
    return this.alumnoForm.get('firstName');
  }

  get lastNameControl() {
    return this.alumnoForm.get('lastName');
  }

  get emailControl() {
    return this.alumnoForm.get('email');
  }

  get genderControl() {
    return this.alumnoForm.get('gender');
  }

  save(): void {
    if (this.alumnoForm.invalid) {
      this.alumnoForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.alumnoForm.value);
    }
  }
}
