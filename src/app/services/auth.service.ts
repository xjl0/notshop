import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private routrer: Router) { }


setToken(token: string) {
  localStorage.setItem('token', token)
}

getToken() {
  return localStorage.getItem('token')
}

isLoggedIn(){
  return this.getToken() !== null;
}

login(userInfo: {email:string, password: string}): Observable <string | boolean> {
  if(userInfo.email ==='user@notshop.com' && userInfo.password==='password2000') {
    this.setToken('youareuser')
    return of(true)
  }
  return throwError(( )=> new Error('Faild Login'))
}



}
