import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DatePickerComponent {
  @Input() controlName:any;
  @Input() label: string = 'input';
  @Input() placeholder?: string
  @Input() className: string = 'formClass';
  @Input() type: string = 'text';
  @Input() readOnly: boolean = false;
  @Input() error?: boolean = false;
  @Input() second_action: boolean = false;
  @Output() _other_action: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  showSpinners: boolean = true
  showSeconds: boolean = false
  stepHour: number = 1
  stepMinute: number = 1
  stepSecond: number = 1
  touchUi: boolean = false
  color: undefined
  enableMeridian: boolean = false
  disableMinute: boolean = false
  hideTime: boolean = false
}
