import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button'; // 'button', 'submit', 'reset'
  @Input() class: string = ''; // Additional CSS classes
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    this.clicked.emit(event);
  }
}
