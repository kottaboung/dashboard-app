import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {

  }

  logout(): void {
    this.authService.Logout();
    this.router.navigate(['/login']);
    console.log('logout');
  }
}
