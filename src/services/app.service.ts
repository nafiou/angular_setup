import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  //_loader: boolean = false
  constructor() { 

  }

  set loader(value: boolean){
    this.loader$.next(value)
  }
}
