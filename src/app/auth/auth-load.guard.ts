import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '@services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.checkLogin()) this.router.navigate(['login'])
    return this.checkLogin()
  }
  checkLogin() {
    return this.loginService.validation()
  }
}
