import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/models/UserInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    // submitLogin() {
  //   // console.log(this.loginForm.value)
  //   this.authService.login(this.loginForm.value).subscribe({
  //     next: ()=>this.router.navigate(['profile']),
  //     error: (err)=>alert(err.message)
  //   })
  // }

  fb = inject(FormBuilder);
  http = inject(HttpClient)
  authService = inject(AuthService)
  router = inject(Router)

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['',Validators.required]
  });

  onSubmitLogin(): void {
    this.http
    .post<{user: UserInterface}>('https://api.realworld.io/api/users/login',{user: this.loginForm.getRawValue(),
  })
    .subscribe((response)=>{
      console.log('response', response);
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user)
      this.router.navigateByUrl('/profile')
    })
  }

}
