import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../services/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent  {
  username: string = '';
  password: string = '';
  

  constructor(
    private authService:AuthenticationService,
    private router: Router,
  ) {}



  login(): void {
    const user: User | null = this.authService.login(this.username,this.password);
    if(user){
      if (user.role === 'admin' ) {
        this.router.navigate(['dashboard']);
      } else if (user.role === 'user') {
        this.router.navigate(['dashboard2']);
      } else {
        console.error('Unknow role !', user.role);
      }
      
      console.log(this.username);
    }
     else {
      alert('please try again');
      console.log('try again');
    }
  }

}
