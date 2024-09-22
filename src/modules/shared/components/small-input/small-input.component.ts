import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-small-input',
  templateUrl: './small-input.component.html',
  styleUrls: ['./small-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SmallInputComponent {
  @Input() controlName:any;
  @Input() placeholder?: string = ''
  @Input() error: boolean | undefined = false;
}
