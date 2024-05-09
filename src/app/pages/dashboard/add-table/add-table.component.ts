import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AddTableComponent {

  dateOfBirth!: string;
  age!: number;

  closeModal(): void {
    this.dialogRef.close();
  }

  calculateAge() {
    if (!this.dateOfBirth){
      console.log('Date empty');
      return;
    }
    const dob = new Date(this.dateOfBirth);

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

  newSkill: string = '';
  skillsList: string[] = [];
  selectedSkillToDelete: string = '';

  addSkill() {
    if (this.newSkill.trim() !== '') {
      this.skillsList.push(this.newSkill.trim());
      this.newSkill = ''; 
    }
  }

  deleteSkill(skill: string) {
    const index = this.skillsList.indexOf(skill);
    if (index !== -1) {
      this.skillsList.splice(index, 1);
    }
  }

  private recordSubject = new Subject<any>();
  recordAdded$ = this.recordSubject.asObservable();
  tableData: any[] = [];

  name:string ='';
  lastname : string = '';
  nickname : string = '';
  gender : string = '';
  skills : string = '';
  lastUsedId: number = 0;

  addRecord(name: string, lastname: string, nickname: string ,gender : string, skills: string, age: number, dateOfBirth: string,) {
    const record = { name , lastname , nickname, gender , skills , age , dateOfBirth};
    console.log('Record to be emitted:', record);
    this.recordSubject.next(record);
  }

  constructor(
    public dialogRef: MatDialogRef<AddTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.tableData = data.tableData;
    if (this.tableData.length > 0) {
      this.lastUsedId = this.tableData[this.tableData.length - 1].id;
    }
    console.log(this.tableData);
  }
  
  saveModal() {
      if (!this.name || !this.lastname || !this.nickname || !this.gender || !this.skillsList || !this.age || !this.dateOfBirth) {
        alert('Please fill out all required fields.')
        console.log('Please fill out all required fields.');
        return;
      }
    const newRecord = {
      id: this.lastUsedId + 1,
      name: this.name,
      lastname: this.lastname,
      nickname: this.nickname,
      gender: this.gender, 
      skillsList: this.skillsList, 
      age: this.age,
      dateOfBirth: this.dateOfBirth,
    };
  
    this.recordSubject.next(newRecord); 
    console.log('saved');
    this.clearForm();
    this.dialogRef.close();
  }

  clearForm() {
    this.name = '';
    this.lastname = '';
    this.nickname = '';
    this.gender = '';
    
    this.skills = '';
  } 
}
