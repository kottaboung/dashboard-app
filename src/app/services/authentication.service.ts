import {  Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    isLoggedIn!: boolean;
    currentUser: User | null = null;

    login(username:string, password:string,): User | null {
        const vailidUser: User = {username: 'admin' , password: 'admin' , role: 'admin' };
        const normalUser : User = {username: 'user' , password: 'user' ,role: 'user'};

        if (username === vailidUser.username && password === vailidUser.password) {
            this.isLoggedIn = true;
            this.currentUser = vailidUser;
            return vailidUser;
        } else if (username === normalUser.username && password === normalUser.password) {
          this.isLoggedIn = true;
          this.currentUser = normalUser;
          return normalUser
        } else {
          this.isLoggedIn = false;
          this.currentUser = null;
          return null;
        }
    }

    Logout(): void {
        this.isLoggedIn = false;
        this.currentUser = null;
        
    }
}