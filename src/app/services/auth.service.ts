import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  signup(users: any): Observable<Iuser[]>{
    return this.http.post<Iuser[]>(`http://localhost:3000/users`, users)
  }
  signin(users: any): Observable<Iuser[]>{
    return this.http.post<Iuser[]>(`http://localhost:3000/signin`, users)
  }
  isLogin(){
    return !!localStorage.getItem('user')
  }
}
