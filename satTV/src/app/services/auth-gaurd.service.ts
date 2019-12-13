import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(
    private route: Router,
    private userService: UserService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.CurrentUserValue
    if(currentUser) {
      // If User is Login then Route
      return true;
    }

    this.route.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
