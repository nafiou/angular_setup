import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IError } from 'src/_models/models';
import { AppService } from 'src/services/app.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  otpForm: FormGroup
  error?: string | null
  otpOk:boolean = false
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private appService: AppService,
    private authService: AuthService
  ){
     this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
     })

     this.otpForm = this.fb.group({
      digit1: ['', [Validators.required]],
      digit2: ['', [Validators.required]],
      digit3: ['', [Validators.required]],
      digit4: ['', [Validators.required]],
      digit5: ['', [Validators.required]],
      digit6: ['', [Validators.required]]
     })
  }

  login(){
     if(this.loginForm.valid && this.otpForm.valid){
      this.appService.loader = true
      this.authService.login({...this.loginForm.value,
         otp: `${this.otpForm.value.digit1}${this.otpForm.value.digit2}${this.otpForm.value.digit3}${this.otpForm.value.digit4}${this.otpForm.value.digit5}${this.otpForm.value.digit6}`})
         .subscribe({
          next: (res) => {
               if(res.statusCode === 200){
                this.router.navigate(['/home'])
               }
          },
          error: (err: IError) => {
            console.log('error', err)
            if(err.error.statusCode == 404){
              this.error = 'Credentials are incorrects.'
            }else{
              this.error = 'Unknown error, please contact the administrator.'
            }
        }
         })
     }
  }

  otp(){
      if(this.loginForm.valid){
        this.appService.loader = true
        this.authService.otp(this.loginForm.value).subscribe(
          {
            next: (res) =>{
               if(res.statusCode === 202){
                this.otpOk = true
                 // this.router.navigate(['/home'])
               }
            },
            error: (err: IError) => {
                console.log('error', err)
                if(err.error.statusCode == 404){
                  this.error = 'Credentials are incorrects.'
                }else{
                  this.error = 'Unknown error, please contact the administrator.'
                }
            }
          }
        ).add(
          () => {
            this.appService.loader = false
          }
        )
      }
  }
}
