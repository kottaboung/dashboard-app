import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.css'
})
export class Dashboard2Component implements OnInit {
  tableData: any[] = [];
  activeRows: number[] = [];
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
