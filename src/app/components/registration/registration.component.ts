import { Component, OnInit,inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/models/UserInterface';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient)
  authService = inject(AuthService)
  router = inject(Router)

  registrationForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['',Validators.required]
  });

  onSubmitRegistration(): void {
    this.http
    .post<{user: UserInterface}>('https://api.realworld.io/api/users',{user: this.registrationForm.getRawValue(),
  })
    .subscribe((response)=>{
      console.log('response', response);
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user)
      this.router.navigateByUrl('/')
    })
  }

}


