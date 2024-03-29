import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable(
  {
    providedIn: 'root'
  }
)

export class AuthGuardGuard implements CanActivate {

  unAuthorizedURL = [
    '/',
    '/login',
    '/signup',
    '/forgot_password'
  ]

  constructor( private router: Router ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return true;

  }
}
