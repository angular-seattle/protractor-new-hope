import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // TODO(Milestone 2): Fix the typo
    if (route.url[0].path == "prisoner") {
      window.location.replace("/assets/login.html");
      return false;
    }
    // TODO(heathkit): Make the login page work.
    return true;
  }

}
