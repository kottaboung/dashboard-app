import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-table-suer',
  templateUrl: './table-suer.component.html',
  styleUrl: './table-suer.component.css'
})
export class TableSuerComponent implements OnInit {

  @Input() tableData: any[] = [];
  @Input() activeRows: number[] = [];
  @Input() isActive: boolean = false;
  @Input() activeRowIndex: number[] = [];

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService
  ){

  }

  isActiveRow(index: number): boolean {
    return this.activeRows.includes(index);
  }
  
  
  ngOnInit(): void{
    this.sharedService.activeRows$.subscribe(activeRows => {
      this.activeRows = activeRows;
    });

    this.sharedService.isActive$.subscribe(isActive => {
      this.isActive = isActive;
    });
    
    const saveData = localStorage.getItem('tableData');
    if (saveData) {
      this.tableData = JSON.parse(saveData);
    }
  }

}
