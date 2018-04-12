import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private afAuth: AngularFireAuth, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.map(auth => {
      if (!auth) {
        this.router.navigateByUrl('login');
        return false;
      } else {
        return true;
      }
    })
  }
}
