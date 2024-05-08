import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private dialog: MatDialog) { }
}
