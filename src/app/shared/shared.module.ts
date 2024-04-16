import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {CdkMenuModule} from '@angular/cdk/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldValidationPipe } from './pipes/form-field-validation.pipe';
import { NameJoinLastNamePipe } from './pipes/name-join-last-name.pipe';
import { FontSizeDirective } from './directivas/font-size.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FormFieldValidationPipe,
    NameJoinLastNamePipe,
    FontSizeDirective
  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    CdkMenuModule,
    MatToolbarModule,   
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormFieldValidationPipe,
    NameJoinLastNamePipe,
    FontSizeDirective,
    MatSnackBarModule
  ]
})
export class SharedModule { }
