import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.checkLogin()) this.router.navigate(['login'])
    return this.checkLogin()
  }
  checkLogin() {
    return this.loginService.validation()
  }

}
