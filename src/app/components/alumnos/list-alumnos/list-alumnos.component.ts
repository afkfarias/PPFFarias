import { Component } from '@angular/core';
import { IAlumno } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnoComponent } from '../abm-alumno/abm-alumno.component';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrl: './list-alumnos.component.scss'
})
export class ListAlumnosComponent {
  idNewAlumno = 4;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'gender',
    'createdAt',
    'actions',
  ];

  alumnos: IAlumno[] = [
    {
      id: 1,
      firstName: 'Alexis',
      lastName: 'Ferreira',
      email: 'ffar@hotmail.com',
      gender: 'M',
      createdAt: new Date(),
      deletedAt: null,
    },
    {
      id: 2,
      firstName: 'Malena',
      lastName: 'Pérez',
      email: 'mpe@gmail.com',
      gender: 'F',
      createdAt: new Date(),
      deletedAt: null,
    },
    {
      id: 3,
      firstName: 'Agustin',
      lastName: 'Juárez',
      email: 'aj@gmail.com',
      gender: 'M',
      createdAt: new Date(),
      deletedAt: null,
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editAlumno?: IAlumno): void {
    this.matDialog
      .open(AbmAlumnoComponent, {
        data: editAlumno,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editAlumno) {
              console.log(editAlumno)
              this.alumnos = this.alumnos.map((u) =>
                u.id === editAlumno.id ? { ...u, ...result } : u
              );
            } else {
              console.log(result)
              result.id = this.idNewAlumno;
              this.idNewAlumno++;
              result.createdAt = new Date();
              this.alumnos = [...this.alumnos, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('Esta seguro de eliminar el alumno?')) {
      this.alumnos = this.alumnos.filter((u) => u.id != id);
    }
  }
}
