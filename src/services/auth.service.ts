import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/_models/models';
import { environment } from 'src/environments/environment';
export interface IUser {
  legalBusinessName: string;
  businessName: string;
  legalForm: string;
  registrationNumber: string;
  dateOfIncorporation: Date;
  headOfficeAddress: string;
  vatNumber: string;
  legalRepresentativeName: string;
  legalRepresentativeTitle: string;
  legalRepresentativeAddress: string;
  legalRepresentativePhone: string;
  email: string;
  annualTurnover: number;
  bankName: string;
  bankDetails: string;
  iban: string;
  bic: string;
  password: string;
}

interface ILogin{
   email: string,
   password: string,
   otp: string
}

interface IOtp{
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { 

  }

  signup(data: IUser): Observable<IResponse<IUser>>{
    return this.http.post(environment.api+'/users/register', data) as Observable<IResponse<IUser>>
  }

  login(data: ILogin): Observable<IResponse<IUser>>{
    return this.http.post(environment.api+'/users/login', data) as Observable<IResponse<IUser>>
  }

  otp(data: IOtp): Observable<IResponse<string>>{
    return this.http.post(environment.api+ '/otp', data) as Observable<IResponse<string>>
  }
}
