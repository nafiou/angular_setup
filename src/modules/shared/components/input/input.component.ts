
import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ControlContainer, FormControlDirective, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() controlName:any;
  @Input() label?: string = 'input';
  @Input() placeholder?: string = ''
  @Input() className: string = 'formClass';
  @Input() type: string = 'text';
  @Input() readOnly: boolean = false;
  @Input() error: boolean | undefined = false;
  @Input() second_action: boolean = false;
  @Output() sendValue: EventEmitter<string> = new EventEmitter<string>()
  @Output() _other_action: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { 
    this.controlName = '';
  }

  ngAfterViewInit(): void {
    
     
  }

  ngOnInit(): void {
  }
  otheAction(){
    this._other_action.emit(true)
  }
}