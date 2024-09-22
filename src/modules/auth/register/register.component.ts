import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IError } from 'src/_models/models';
import { AppService } from 'src/services/app.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    step0Form: FormGroup
    step1Form: FormGroup
    step2Form: FormGroup
    step3Form: FormGroup
    error: string | undefined
    registered: boolean = false
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private appservice: AppService
    ){
     
      this.step0Form = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword:['', []]
      })

      this.step1Form = this.fb.group({
           legalBusinessName: ['', [Validators.required]],
           businessName: ['', [Validators.required]],
           legalForm: ['', [Validators.required]],
           registrationNumber: ['', [Validators.required]],
           dateOfIncorporation: ['', [Validators.required]],
           headOfficeAddress: ['', [Validators.required]],
           vatNumber: ['', [Validators.required]],
      })
      this.step2Form = this.fb.group({
        legalRepresentativeName: ['', [Validators.required]],
        legalRepresentativeEmail: ['', [Validators.required]],
        legalRepresentativeTitle: ['', [Validators.required]],
        legalRepresentativeAddress: ['', [Validators.required]],
        legalRepresentativePhone: ['', [Validators.required]],
      })
      this.step3Form = this.fb.group({
        annualTurnover: ['', [Validators.required]],
        bankName: ['', [Validators.required]],
        bankDetails: ['', [Validators.required]],
        iban: ['', [Validators.required]],
        bic: ['', [Validators.required]],
      })


    }

    registerUser(){
      if(this.step0Form.valid && this.step1Form.valid && this.step2Form.valid && this.step3Form.valid){
        console.log(this.step0Form.value, this.step1Form.value, this.step2Form.value, this.step3Form.value)
        this.appservice.loader = true
        this.authService.signup({...this.step0Form.value, ...this.step1Form.value, ...this.step2Form.value, ...this.step3Form.value}).subscribe(
          {
            next: (res) => {
                console.log('request result', res)
                this.registered = res.statusCode === 201
            },
            error: (err: IError) => {
              if(err.error.statusCode === 400){
                 this.error = err.error.body
              }
              console.log('error', err)
            },
          }
        ).add(
          () => {
            this.appservice.loader = false
          }
        )
      }
    }
}
