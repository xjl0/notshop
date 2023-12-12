import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { UserInterface } from '../models/UserInterface';

@Injectable({
  providedIn: 'root'
})


export class AuthService {


currentUserSig = signal<UserInterface | undefined| null>(undefined)

logout() {
 localStorage.setItem('token', '')
 this.currentUserSig.set(null)
}



// token$= new BehaviorSubject<string | undefined | null>(null)


// constructor(private routrer: Router) { }


// setToken(token: string) {
//   this.token$.next(token)
// }

// getToken() {
//   return this.token$
// }

// isLoggedIn(){
//   return this.token$ !== null;
// }

// login(userInfo: {email:string, password: string}): Observable <string | boolean> {
//   if(userInfo.email ==='user@notshop.com' && userInfo.password==='password2000') {
//     this.setToken('youareuser')
//     return of(true)
//   }
//   return throwError(( )=> new Error('Faild Login'))
// }

// logout() {
//   this.setToken('')
// }

}
