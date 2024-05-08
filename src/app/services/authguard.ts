import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Observable, Observer } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('AuthGuard ative');
        if (this.authService.isLoggedIn){
            console.log('User login');
            return true;
        } else {
            console.log('user not login');
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
        }
    }

}