import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.checkLogin()) this.router.navigate(['login'])
    return this.checkLogin()
  }
  checkLogin() {
    return this.loginService.validation()
  }
}
