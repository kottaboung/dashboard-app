import { Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userCount: number = 0;
  recenActivities: string[]=[];

  constructor(){
    this.userCount = 100;
    this.recenActivities = ['Logged in', 'Updated Profile'];
  }

  handleAction(): void{
    console.log('Action Performed');
  }

 
}
