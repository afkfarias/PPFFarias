import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { AbmAlumnoComponent } from './abm-alumno/abm-alumno.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ListAlumnosComponent,
    AbmAlumnoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListAlumnosComponent,
    AbmAlumnoComponent
  ]
})
export class AlumnosModule { }
