import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  editedData: any;
  originalData: any;

  name:string ='';
  lastname : string = '';
  nickname : string = '';
  gender : string = '';
  skills : string = '';
  dateOfBirth!: string;
  age: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.originalData = data.originalData;
    this.editedData = { ...data.editedData };
    this.calculateAge();
    
  }

  calculateAge() {
    if (!this.originalData.dateOfBirth){
      console.log('Date empty');
      return;
    }
    const dob = new Date(this.originalData.dateOfBirth);

    if (isNaN(dob.getTime())) {
      console.log('error');
      return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    this.age = age;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
   

  saveModal(): void {
    
    const editedRecord = { ...this.editedData, age: this.age };
    console.log('Saved data:', this.editedData);
    this.dialogRef.close(editedRecord);
       
  }

}
