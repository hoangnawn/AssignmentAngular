import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){

  }
  canActivate() {
    if(this.auth.isLogin()){
      return true
    }
    alert('Muốn vào trang này bạn phải có tài khoản admin')
    this.router.navigateByUrl('/login')
    return false;
  }
  
}
