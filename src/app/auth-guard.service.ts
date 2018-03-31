import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isAuthenticated()) {
      window.location.replace("/assets/login.html");
      return false;
    }
    return true;
  }

}
