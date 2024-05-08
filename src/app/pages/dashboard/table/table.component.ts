import { Component , OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTableComponent } from '../add-table/add-table.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { SharedService } from '../../../services/shared.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  
  tableData: any[] = [];
  originalData: any;
  isActive: boolean = false;
  isActiveSubject:any=[]=[];
  
  


  toggleActive(): void {
    const currentValue = this.isActiveSubject.getValue();
    const newValue = !currentValue;
    this.isActiveSubject.next(newValue);
    localStorage.setItem('isActive', JSON.stringify(newValue));
  }

  toggle1(): void {
    this.sharedService.toggleActive();
  }

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService
  ){
    const storedActiveStatus = localStorage.getItem('isActive');
    if (storedActiveStatus) {
      this.isActive = JSON.parse(storedActiveStatus);
    }
    const storedActiveRows = localStorage.getItem('activeRows');
    if (storedActiveRows) {
      this.activeRowIndex = JSON.parse(storedActiveRows);
    }
  }

  activeRowIndex: number[] = [];
  
  
  toggle(rowIndex: number, isActive: boolean): void {
    const index = this.activeRowIndex.indexOf(rowIndex);
    if (isActive && index === -1) {
      this.activeRowIndex.push(rowIndex);
    } else if (!isActive && index !== -1) {
      this.activeRowIndex.splice(index, 1);
    }
    localStorage.setItem('activeRows', JSON.stringify(this.activeRowIndex));
  }
  
  isRowActive(rowIndex:number): boolean{
    return this.activeRowIndex.includes(rowIndex);
  }
  

  ngOnInit(): void {
    this.sharedService.activeRows$.subscribe(activeRows => {
      this.activeRowIndex = activeRows;
    });

    this.sharedService.isActive$.subscribe(isActive => {
      this.isActive = isActive;
    });
    
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      this.tableData = JSON.parse(savedData);
    }
  }


  isEdit(originalData: any): void {
   

    const dialogRef = this.dialog.open(EditTableComponent, {
      width: '500px',
      height: 'auto',
      position: { left: '30%', top: '5%' },
      data: { 
        originalData: originalData,
        editedData: { ...originalData } 
      }
    });

    dialogRef.afterClosed().subscribe((updatedData: any) => {
      console.log(updatedData);
      if (updatedData) {
        const index = this.tableData.findIndex(item => item === originalData);
        if (index !== -1) {
          this.tableData[index] = { ...updatedData };
          this.saveData();
        }
        console.log('Updated data:', originalData);
      }
    });
  }
  
  isOpen() {
    const dialogRef = this.dialog.open(AddTableComponent, {
      width: '500px',
      height: 'auto',
      position: { left: '30%', top: '5%' },
      data: { tableData: this.tableData }
    });

    dialogRef.componentInstance.recordAdded$.subscribe(newRecord => {
      console.log('New record received in TableComponent:', newRecord);
      if (newRecord) {
        this.tableData.push(newRecord);
        this.saveData();
      }
    });
  }

  delete(record:any) : void {
    const index = this.tableData.findIndex(item => item === record)
    if(index !== -1) {
      this.tableData.splice(index,1);
      localStorage.setItem('tableData', JSON.stringify(this.tableData));
    }
  }

  private saveData(): void {
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }
}
  



