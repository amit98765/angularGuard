import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) { };
    canActivate() {
        return this.checkLoggedIn();
    }

    private checkLoggedIn(): boolean {
        let loggedIn: boolean = Math.random() < 0.5;
        if (!loggedIn) {
            alert("You are not logged in and will be redirected to login page");
            this.router.navigate(["/login"]);
        }
        return loggedIn;
    }
}